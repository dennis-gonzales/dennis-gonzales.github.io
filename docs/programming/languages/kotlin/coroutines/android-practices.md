# Android Practices

This page presents several best practices that have a positive impact by making your app more scalable and testable when using coroutines.

## Best Practices

These tips can be applied to a broad spectrum of apps. However, you should treat them as guidelines and adapt them to your requirements as needed.

### Inject Dispatchers

When creating new coroutines or calling `withContext`, avoid hardcoding Dispatchers. Instead, inject them. This practice makes testing easier as you can replace the dispatchers in unit and instrumentation tests with a test dispatcher. It helps to make your tests more deterministic.

**Do:**

```kotlin
class NewsRepository(
    private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
) {
    suspend fun loadNews() = withContext(defaultDispatcher) { /* ... */ }
}
```

**Don't:**

```kotlin
class NewsRepository {
    suspend fun loadNews() = withContext(Dispatchers.Default) { /* ... */ }
}
```

### Suspend Functions Should Be Safe To Call From The Main Thread

All suspend functions should be main-safe, i.e., they should be safe to call from the main thread without blocking the UI or performing long-running operations. Any class performing such operations in a coroutine must ensure these tasks are dispatched to a background thread.

The `withContext` function is a tool to facilitate this transition. It changes the `CoroutineDispatcher` determining the thread on which the coroutine runs. For example, `Dispatchers.Main` is for the main thread, `Dispatchers.IO` is for I/O tasks, and `Dispatchers.Default` is for CPU-intensive tasks.

```kotlin
class NewsRepository(private val ioDispatcher: CoroutineDispatcher) {
    suspend fun fetchLatestNews(): List<Article> {
        return withContext(ioDispatcher) { /* Long-running I/O operation */ }
    }
}
```

In this example, `fetchLatestNews` is a main-safe suspending function as it offloads potential long-running operations to a background thread, using `withContext(ioDispatcher)`. The `ioDispatcher` is typically `Dispatchers.IO` or any other dispatcher optimized for I/O operations.

This pattern enhances the scalability of your app. The callers of suspend functions need not worry about choosing the right `Dispatcher` for the job. The responsibility of selecting the appropriate `Dispatcher` lies with the class that performs the work.

This method of injecting the `CoroutineDispatcher` also improves testability by allowing the replacement of the dispatcher with a different one in unit tests, such as `Dispatchers.Unconfined` or `TestCoroutineDispatcher`, enhancing test predictability and control.

### ViewModel Should Create Coroutines

ViewModel classes should create coroutines instead of exposing suspend functions to perform business logic. If you need to expose state using a stream of data, or only a single value needs to be emitted, suspend functions in the ViewModel can be useful.

**Do:**

```kotlin
class LatestNewsViewModel(
    private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
) : ViewModel() {
    private val _uiState = MutableStateFlow<LatestNewsUiState>(LatestNewsUiState.Loading)
    val uiState: StateFlow<LatestNewsUiState> = _uiState

    fun loadNews() {
        viewModelScope.launch {
            val latestNewsWithAuthors = getLatestNewsWithAuthors()
            _uiState.value = LatestNewsUiState.Success(latestNewsWithAuthors)
        }
    }
}
```

**Don't:**

```kotlin
class LatestNewsViewModel(
    private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
) : ViewModel() {
    suspend fun loadNews() = getLatestNewsWithAuthors()
}
```

### Don't Expose Mutable Types

To avoid uncontrolled changes to mutable types, prefer exposing immutable types to other classes.

**Do:**

```kotlin
class LatestNewsViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(LatestNewsUiState.Loading)
    val uiState: StateFlow<LatestNewsUiState> = _uiState
    /* ... */
}
```

**Don't:**

```kotlin
class LatestNewsViewModel : ViewModel() {
    val uiState = MutableStateFlow(LatestNewsUiState.Loading)
    /* ... */
}
```

### The Data and Business Layer Should Expose Suspend Functions and Flows

To allow the caller to control the execution and lifecycle of the work happening in those layers, classes in the data and business layers should expose suspend functions for one-shot calls and Flow to notify about data changes.

Example:

```kotlin
class ExampleRepository {
    suspend fun makeNetworkRequest() { /* ... */ }
    fun getExamples(): Flow<Example> { /* ... */ }
}
```

### Creating Coroutines in The Business and Data Layer

Depending on the nature of the work, you may need to create coroutines in the data or business layer.

Example:

```kotlin
class GetAllBooksAndAuthorsUseCase(
    private val booksRepository: BooksRepository,
    private val authorsRepository: AuthorsRepository,
) {
    suspend fun getBookAndAuthors(): BookAndAuthors {
        return coroutineScope {
            val books = async { booksRepository.getAllBooks() }
            val authors = async { authorsRepository.getAllAuthors() }
            BookAndAuthors(books.await(), authors.await())
        }
    }
}
```

### Inject TestDispatchers in Tests

In your tests, inject an instance of `TestDispatcher`. Two implementations are available in the `kotlinx-coroutines-test` library: `StandardTestDispatcher` and `UnconfinedTestDispatcher`.

Example:

```kotlin
class ArticlesRepositoryTest {
    @Test
    fun testBookmarkArticle() = runTest {
        val testDispatcher = UnconfinedTestDispatcher(testScheduler)
        val articlesDataSource = FakeArticlesDataSource()
        val repository = ArticlesRepository(articlesDataSource, testDispatcher)
        val article = Article()
        repository.bookmarkArticle(article)
        assertThat(articlesDataSource.isBookmarked(article)).isTrue()
    }
}
```

### Avoid GlobalScope

Avoid using `GlobalScope` as it promotes hardcoding values, makes testing difficult, and doesn't allow a common `CoroutineContext` for all coroutines.

**Do:**

```kotlin
class ArticlesRepository(
    private val articlesDataSource: ArticlesDataSource,
    private val externalScope: CoroutineScope = GlobalScope,
    private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
) {
    suspend fun bookmarkArticle(article: Article) {
        externalScope.launch(defaultDispatcher) {
            articlesDataSource.bookmarkArticle(article)
        }
            .join()
    }
}
```

**Don't:**

```kotlin
class ArticlesRepository(
    private val articlesDataSource: ArticlesDataSource,
) {
    suspend fun bookmarkArticle(article: Article) {
        GlobalScope.launch {
            articlesDataSource.bookmarkArticle(article)
        }
            .join()
    }
}
```

### Make Your Coroutine Cancellable

Ensure your coroutine can be cancelled by checking its status before executing long tasks.

Example:

```kotlin
someScope.launch {
    for(file in files) {
        ensureActive() // Check for cancellation
        readFile(file)
    }
}
```

### Watch Out for Exceptions

Catch likely exceptions in the body of any coroutines created with `viewModelScope` or `lifecycleScope` to prevent your app from crashing.

Example:

```kotlin
class LoginViewModel(
    private val loginRepository: LoginRepository
) : ViewModel() {
    fun login(username: String, token: String) {
        viewModelScope.launch {
            try {
                loginRepository.login(username, token)
                // Notify view user logged in successfully
            } catch (exception: IOException) {
                // Notify view login attempt failed
            }
        }
    }
}
```

Remember, these are guidelines and they should be adapted to your requirements as needed.

**Related Links:**

- [Google Android: Coroutines Practices](https://developer.android.com/kotlin/coroutines/coroutines-best-practices)

## Example Implementation in MVVM

Sure, here's a simple example of an MVVM pattern in Android using Kotlin and Coroutines.

Firstly, let's define a `Data` model.

```kotlin title="./model/Data.kt"
data class Data(val id: Int, val name: String)
```

Next, we create a `Repository` to fetch our data.

```kotlin title="./model/Repository.kt"
class Repository(private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO) {

    suspend fun fetchData(): Data {
        return withContext(ioDispatcher) {
            // Here, we're simulating a network or database operation
            delay(1000)  // Simulate network delay
            Data(1, "Example Data")
        }
    }
}
```

Now, we define the `ViewModel`.

```kotlin title="./viewmodel/MainViewModel.kt"
class MainViewModel(private val repository: Repository) : ViewModel() {

    private val _data = MutableLiveData<Data>()
    val data: LiveData<Data> get() = _data

    fun fetchData() {
        viewModelScope.launch {
            _data.value = repository.fetchData()
        }
    }
}
```

Finally, in our `Activity`, we observe the LiveData from the ViewModel.

```kotlin title="./MainActivity.kt"
class MainActivity : AppCompatActivity() {

    private lateinit var viewModel: MainViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initialize the ViewModel
        viewModel = ViewModelProvider(this).get(MainViewModel::class.java)

        // Observe the LiveData from the ViewModel
        viewModel.data.observe(this, Observer { data ->
            // Update UI with the data
            updateUI(data)
        })

        // Fetch data
        viewModel.fetchData()
    }

    private fun updateUI(data: Data) {
        // Update UI with the data here
    }
}
```

This is a basic example of how you can use Coroutines with the MVVM architecture in Android. Depending on the complexity of your project, you might need to add more layers or use additional libraries, like Room for database access or Retrofit for network calls.
