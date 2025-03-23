
var defaultImage = "https://images.unsplash.com/photo-1707421940727-ebfb88cd6aa0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

// define local storage default settings
const defaultSettings = {
  //ShowTitle: false,
  //ShowLogo: true,
  LogoStyle: "Logo3",
  LogoTheme: true,
  LoadingOverlay: true,

  DefaultSearchEngine: "Google",
  Suggestions: true,
  SearchBarTheme: true,
  ShowSearchBar: true,
  searchBangs: true,

  BackgroundColor: "#545cc4",
  CirclesColor: "#212c87",
  Noise: true,
  
  BackgroundStyle: "Solid",
  BackgroundImageFiles: [defaultImage],
  backgrodunActualImage: defaultImage,
  backgroundValues: [100, 0],

  ShowWeather: false,
  Latitude: 0,
  Longitude: 0,
  Fahrenheit: false,

  ShowClock: false,
  ClockFormat: 0,
  ShowClockSeconds: false,
  ClockTheme: true,
};

/*
// define local storage default search engine list   //localStorage.removeItem('searchEngines');
const SearchEngineList = [
  // Motores de búsqueda generales
  { name: "Google", url: "https://www.google.com/search?q=", keyword: "google", searchin: true, bangs: "g" },
  { name: "Google Images", url: "https://www.google.com/search?tbm=isch&q=", keyword: "google images", searchin: true, bangs: "gi" },
  { name: "Google Maps", url: "https://www.google.com/maps/search/", keyword: "google maps", searchin: true, bangs: "gmaps" },
  { name: "Bing", url: "https://www.bing.com/search?q=", keyword: "bing", searchin: true, bangs: "b" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", keyword: "duckduckgo", searchin: true, bangs: "d" },
  { name: "Yahoo", url: "https://search.yahoo.com/search?p=", keyword: "yahoo", searchin: true, bangs: "y" },
  { name: "Brave Search", url: "https://search.brave.com/search?q=", keyword: "brave", searchin: true, bangs: "brave" },

  // Herramientas de Google y productividad
  { name: "Google Translate", url: "https://translate.google.com/?sl=auto&tl=en&text=", keyword: "translator", searchin: true, bangs: "tr" },
  { name: "Google Docs", url: "https://docs.google.com/document/u/0/", keyword: "docs", searchin: true, bangs: "gd" },
  { name: "Google Scholar", url: "https://scholar.google.com/scholar?q=", keyword: "scholar", searchin: true, bangs: "gs" },
  { name: "Microsoft Academic", url: "https://academic.microsoft.com/search?q=", keyword: "microsoft academic", searchin: true, bangs: "ma" },

  // art
  { name: "Pixiv", url: "https://www.pixiv.net/en/tags/", keyword: "pixiv", searchin: true, bangs: "px" },
  { name: "Unsplash", url: "https://unsplash.com/s/photos/", keyword: "unsplash", searchin: true, banger: "us" },

  // Redes sociales
  { name: "YouTube", url: "https://www.youtube.com/results?search_query=", keyword: "youtube", searchin: true, bangs: "yt" },
  { name: "Twitter", url: "https://twitter.com/search?q=", keyword: "twitter", searchin: true, bangs: "tw" },
  { name: "TikTok", url: "https://www.tiktok.com/search?q=", keyword: "tiktok", searchin: true, bangs: "tt" },
  { name: "Instagram", url: "https://www.instagram.com/explore/tags/", keyword: "instagram", searchin: true, bangs: "ig" },
  { name: "Facebook", url: "https://www.facebook.com/search/top?q=", keyword: "facebook", searchin: true, bangs: "fb" },
  { name: "Reddit", url: "https://www.reddit.com/search?q=", keyword: "reddit", searchin: true, bangs: "r" },
  { name: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=", keyword: "linkedin", searchin: true, bangs: "li" },

  // Compras
  { name: "Amazon", url: "https://www.amazon.com/s?k=", keyword: "amazon", searchin: true, bangs: "a" },
  { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=", keyword: "ebay", searchin: true, bangs: "eb" },
  { name: "AliExpress", url: "https://www.aliexpress.com/wholesale?SearchText=", keyword: "aliexpress", searchin: true, bangs: "ae" },
  { name: "MercadoLibre", url: "https://www.mercadolibre.com.ar/jm/search?as_word=", keyword: "mercadolibre", searchin: true, bangs: "ml" },
  { name: "Walmart", url: "https://www.walmart.com/search?q=", keyword: "walmart", searchin: true, bangs: "wm" },

  // Tecnología y desarrollo
  { name: "GitHub", url: "https://github.com/search?q=", keyword: "github", searchin: true, bangs: "gh" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/search?q=", keyword: "stackoverflow", searchin: true, bangs: "so" },
  { name: "DevDocs", url: "https://devdocs.io/#q=", keyword: "devdocs", searchin: true, bangs: "dd" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/search?q=", keyword: "mdn", searchin: true, bangs: "mdn" },

  // Inteligencia Artificial
  { name: "ChatGPT", url: "https://chat.openai.com/", keyword: "chatgpt", searchin: true, bangs: "cg" },
  { name: "Perplexity AI", url: "https://www.perplexity.ai/search?q=", keyword: "perplexity", searchin: true, bangs: "px" },
  { name: "Bing AI", url: "https://www.bing.com/chat", keyword: "bingai", searchin: true, bangs: "ba" },
  { name: "Google Bard", url: "https://bard.google.com/", keyword: "bard", searchin: true, bangs: "br" },

  // Entretenimiento
  { name: "Netflix", url: "https://www.netflix.com/search?q=", keyword: "netflix", searchin: true, bangs: "nf" },
  { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
  { name: "Disney+", url: "https://www.disneyplus.com/search/", keyword: "disney+", searchin: true, bangs: "dp" },
  { name: "Prime Video", url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=", keyword: "prime video", searchin: true, bangs: "pv" },
  { name: "HBO Max", url: "https://www.hbomax.com/search?q=", keyword: "hbo max", searchin: true, bangs: "hb" },
  { name: "Twitch", url: "https://www.twitch.tv/search?term=", keyword: "twitch", searchin: true, bangs: "twch" },
  { name: "Letterboxd", url: "https://letterboxd.com/search/", keyword: "letterboxd", searchin: true, bangs: "lb" },
  { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=", keyword: "crunchyroll", searchin: true, bangs: "cr" },
  
  // books
  { name: "MangaDex", url: "https://mangadex.org/search?q=", keyword: "mangadex", searchin: true, bangs: "md" },
  { name: "MangaUpdates", url: "https://www.mangaupdates.com/series.html?search=", keyword: "mangaupdates", searchin: true, bangs: "mu" },
  { name: "NovelUpdates", url: "https://www.novelupdates.com/?s=", keyword: "novelupdates", searchin: true, bangs: "nu" },
  { name: "Google Books", url: "https://books.google.com/books?q=", keyword: "google books", searchin: true, bangs: "gb" },
  { name: "Goodreads", url: "https://www.goodreads.com/search?q=", keyword: "goodreads", searchin: true, bangs: "gr" },
  { name: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/search/?query=", keyword: "gutenberg", searchin: true, bangs: "pg" },
  { name: "LibriVox", url: "https://librivox.org/search?q=", keyword: "librivox", searchin: true, bangs: "lv" },
  { name: "BookBub", url: "https://www.bookbub.com/search?search_term=", keyword: "bookbub", searchin: true, bangs: "bb" },
  { name: "Amazon Books", url: "https://www.amazon.com/s?k=books&qid=&ref=nb_sb_noss", keyword: "amazon books", searchin: true, bangs: "ab" },
  { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/", keyword: "barnes", searchin: true, bangs: "bn" },
  { name: "BookFinder", url: "https://www.bookfinder.com/search/?keywords=", keyword: "bookfinder", searchin: true, bangs: "bf" },
  { name: "Open Library", url: "https://openlibrary.org/search?q=", keyword: "open library", searchin: true, bangs: "ol" },

  // Videojuegos
  { name: "Steam", url: "https://store.steampowered.com/search/?term=", keyword: "steam", searchin: true, bangs: "st" },
  { name: "Epic Games Store", url: "https://store.epicgames.com/en-US/browse?q=", keyword: "epic", searchin: true, bangs: "eg" },
  { name: "SteamDB", url: "https://steamdb.info/search/?a=app&q=", keyword: "steamdb", searchin: true, bangs: "sdb" },
  { name: "Kinguin", url: "https://www.kinguin.net/catalogsearch/result/?q=", keyword: "kinguin", searchin: false, bangs: "kg" },
  { name: "Steam Charts", url: "https://steamcharts.com/search?q=", keyword: "steam charts", searchin: true, bangs: "sc" },
  { name: "Humble Bundle", url: "https://www.humblebundle.com/store/search?sort=bestselling&search=", keyword: "humble", searchin: true, bangs: "hbundle" },
  { name: "Instant Gaming", url: "https://www.instant-gaming.com/en/search/?q=", keyword: "instant gaming", searchin: true, bangs: "igaming" },
  { name: "GOG", url: "https://www.gog.com/games?search=", keyword: "gog", searchin: true, bangs: "gog" },
  { name: "Metacritic", url: "https://www.metacritic.com/search/all/", keyword: "metacritic", searchin: true, bangs: "mc" },

  // Noticias
  { name: "BBC News", url: "https://www.bbc.co.uk/search?q=", keyword: "bbc", searchin: true, bangs: "bbc" },
  { name: "CNN", url: "https://www.cnn.com/search?q=", keyword: "cnn", searchin: true, bangs: "cnn" },
  { name: "New York Times", url: "https://www.nytimes.com/search?query=", keyword: "nyt", searchin: true, bangs: "nyt" },
  { name: "The Guardian", url: "https://www.theguardian.com/uk/search?q=", keyword: "guardian", searchin: true, bangs: "tg" },
  { name: "Reuters", url: "https://www.reuters.com/site-search/?query=", keyword: "reuters", searchin: true, bangs: "reuters" },
  { name: "Associated Press", url: "https://apnews.com/search/", keyword: "apnews", searchin: true, bangs: "ap" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com/search/", keyword: "aljazeera", searchin: true, bangs: "aj" },
  { name: "Yahoo News", url: "https://news.search.yahoo.com/search?p=", keyword: "yahoo news", searchin: true, bangs: "yn" },
  { name: "MSNBC", url: "https://www.msnbc.com/search?q=", keyword: "msnbc", searchin: true, bangs: "msnbc" },
  { name: "TechCrunch", url: "https://search.techcrunch.com/search;?q=", keyword: "techcrunch", searchin: true, bangs: "tc" },
  { name: "The Verge", url: "https://www.theverge.com/search?q=", keyword: "theverge", searchin: true, bangs: "verge" },
  { name: "Wired", url: "https://www.wired.com/search/?q=", keyword: "wired", searchin: true, bangs: "wired" },

  // Musica
  { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
  { name: "Apple Music", url: "https://music.apple.com/us/search?term=", keyword: "apple music", searchin: true, bangs: "am" },
  { name: "YouTube Music", url: "https://music.youtube.com/search?q=", keyword: "ytmusic", searchin: true, bangs: "ytm" },
  { name: "SoundCloud", url: "https://soundcloud.com/search?q=", keyword: "soundcloud", searchin: true, bangs: "sc" },
  { name: "Bandcamp", url: "https://bandcamp.com/search?q=", keyword: "bandcamp", searchin: true, bangs: "bc" },

];
*/

// define search engine list
let searchEngines = JSON.parse(localStorage.getItem('searchEngines'));
if (!searchEngines) {
  searchEngines = [
    // Motores de búsqueda generales
    { name: "Google", url: "https://www.google.com/search?q=", keyword: "google", searchin: true, bangs: "g" },
    { name: "Google Images", url: "https://www.google.com/search?tbm=isch&q=", keyword: "google images", searchin: true, bangs: "gi" },
    { name: "Google Maps", url: "https://www.google.com/maps/search/", keyword: "google maps", searchin: true, bangs: "gmaps" },
    { name: "Bing", url: "https://www.bing.com/search?q=", keyword: "bing", searchin: true, bangs: "b" },
    { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", keyword: "duckduckgo", searchin: true, bangs: "d" },
    { name: "Yahoo", url: "https://search.yahoo.com/search?p=", keyword: "yahoo", searchin: true, bangs: "y" },
    { name: "Brave Search", url: "https://search.brave.com/search?q=", keyword: "brave", searchin: true, bangs: "brave" },
  
    // Herramientas de Google y productividad
    { name: "Google Translate", url: "https://translate.google.com/?sl=auto&tl=en&text=", keyword: "translator", searchin: true, bangs: "tr" },
    { name: "Google Docs", url: "https://docs.google.com/document/u/0/", keyword: "docs", searchin: true, bangs: "gd" },
    { name: "Google Scholar", url: "https://scholar.google.com/scholar?q=", keyword: "scholar", searchin: true, bangs: "gs" },
    { name: "Microsoft Academic", url: "https://academic.microsoft.com/search?q=", keyword: "microsoft academic", searchin: true, bangs: "ma" },
  
    // art
    { name: "Pixiv", url: "https://www.pixiv.net/en/tags/", keyword: "pixiv", searchin: true, bangs: "px" },
    { name: "Unsplash", url: "https://unsplash.com/s/photos/", keyword: "unsplash", searchin: true, banger: "us" },
  
    // Redes sociales
    { name: "YouTube", url: "https://www.youtube.com/results?search_query=", keyword: "youtube", searchin: true, bangs: "yt" },
    { name: "Twitter", url: "https://twitter.com/search?q=", keyword: "twitter", searchin: true, bangs: "tw" },
    { name: "TikTok", url: "https://www.tiktok.com/search?q=", keyword: "tiktok", searchin: true, bangs: "tt" },
    { name: "Instagram", url: "https://www.instagram.com/explore/tags/", keyword: "instagram", searchin: true, bangs: "ig" },
    { name: "Facebook", url: "https://www.facebook.com/search/top?q=", keyword: "facebook", searchin: true, bangs: "fb" },
    { name: "Reddit", url: "https://www.reddit.com/search?q=", keyword: "reddit", searchin: true, bangs: "r" },
    { name: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=", keyword: "linkedin", searchin: true, bangs: "li" },
  
    // Compras
    { name: "Amazon", url: "https://www.amazon.com/s?k=", keyword: "amazon", searchin: true, bangs: "a" },
    { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=", keyword: "ebay", searchin: true, bangs: "eb" },
    { name: "AliExpress", url: "https://www.aliexpress.com/wholesale?SearchText=", keyword: "aliexpress", searchin: true, bangs: "ae" },
    { name: "MercadoLibre", url: "https://www.mercadolibre.com.ar/jm/search?as_word=", keyword: "mercadolibre", searchin: true, bangs: "ml" },
    { name: "Walmart", url: "https://www.walmart.com/search?q=", keyword: "walmart", searchin: true, bangs: "wm" },
  
    // Tecnología y desarrollo
    { name: "GitHub", url: "https://github.com/search?q=", keyword: "github", searchin: true, bangs: "gh" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/search?q=", keyword: "stackoverflow", searchin: true, bangs: "so" },
    { name: "DevDocs", url: "https://devdocs.io/#q=", keyword: "devdocs", searchin: true, bangs: "dd" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/search?q=", keyword: "mdn", searchin: true, bangs: "mdn" },
  
    // Inteligencia Artificial
    { name: "ChatGPT", url: "https://chat.openai.com/", keyword: "chatgpt", searchin: true, bangs: "cg" },
    { name: "Perplexity AI", url: "https://www.perplexity.ai/search?q=", keyword: "perplexity", searchin: true, bangs: "px" },
    { name: "Bing AI", url: "https://www.bing.com/chat", keyword: "bingai", searchin: true, bangs: "ba" },
    { name: "Google Bard", url: "https://bard.google.com/", keyword: "bard", searchin: true, bangs: "br" },
  
    // Entretenimiento
    { name: "Netflix", url: "https://www.netflix.com/search?q=", keyword: "netflix", searchin: true, bangs: "nf" },
    { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
    { name: "Disney+", url: "https://www.disneyplus.com/search/", keyword: "disney+", searchin: true, bangs: "dp" },
    { name: "Prime Video", url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=", keyword: "prime video", searchin: true, bangs: "pv" },
    { name: "HBO Max", url: "https://www.hbomax.com/search?q=", keyword: "hbo max", searchin: true, bangs: "hb" },
    { name: "Twitch", url: "https://www.twitch.tv/search?term=", keyword: "twitch", searchin: true, bangs: "twch" },
    { name: "Letterboxd", url: "https://letterboxd.com/search/", keyword: "letterboxd", searchin: true, bangs: "lb" },
    { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=", keyword: "crunchyroll", searchin: true, bangs: "cr" },
    
    // books
    { name: "MangaDex", url: "https://mangadex.org/search?q=", keyword: "mangadex", searchin: true, bangs: "md" },
    { name: "MangaUpdates", url: "https://www.mangaupdates.com/series.html?search=", keyword: "mangaupdates", searchin: true, bangs: "mu" },
    { name: "NovelUpdates", url: "https://www.novelupdates.com/?s=", keyword: "novelupdates", searchin: true, bangs: "nu" },
    { name: "Google Books", url: "https://books.google.com/books?q=", keyword: "google books", searchin: true, bangs: "gb" },
    { name: "Goodreads", url: "https://www.goodreads.com/search?q=", keyword: "goodreads", searchin: true, bangs: "gr" },
    { name: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/search/?query=", keyword: "gutenberg", searchin: true, bangs: "pg" },
    { name: "LibriVox", url: "https://librivox.org/search?q=", keyword: "librivox", searchin: true, bangs: "lv" },
    { name: "BookBub", url: "https://www.bookbub.com/search?search_term=", keyword: "bookbub", searchin: true, bangs: "bb" },
    { name: "Amazon Books", url: "https://www.amazon.com/s?k=books&qid=&ref=nb_sb_noss", keyword: "amazon books", searchin: true, bangs: "ab" },
    { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/", keyword: "barnes", searchin: true, bangs: "bn" },
    { name: "BookFinder", url: "https://www.bookfinder.com/search/?keywords=", keyword: "bookfinder", searchin: true, bangs: "bf" },
    { name: "Open Library", url: "https://openlibrary.org/search?q=", keyword: "open library", searchin: true, bangs: "ol" },
  
    // Videojuegos
    { name: "Steam", url: "https://store.steampowered.com/search/?term=", keyword: "steam", searchin: true, bangs: "st" },
    { name: "Epic Games Store", url: "https://store.epicgames.com/en-US/browse?q=", keyword: "epic", searchin: true, bangs: "eg" },
    { name: "SteamDB", url: "https://steamdb.info/search/?a=app&q=", keyword: "steamdb", searchin: true, bangs: "sdb" },
    { name: "Kinguin", url: "https://www.kinguin.net/catalogsearch/result/?q=", keyword: "kinguin", searchin: false, bangs: "kg" },
    { name: "Steam Charts", url: "https://steamcharts.com/search?q=", keyword: "steam charts", searchin: true, bangs: "sc" },
    { name: "Humble Bundle", url: "https://www.humblebundle.com/store/search?sort=bestselling&search=", keyword: "humble", searchin: true, bangs: "hbundle" },
    { name: "Instant Gaming", url: "https://www.instant-gaming.com/en/search/?q=", keyword: "instant gaming", searchin: true, bangs: "igaming" },
    { name: "GOG", url: "https://www.gog.com/games?search=", keyword: "gog", searchin: true, bangs: "gog" },
    { name: "Metacritic", url: "https://www.metacritic.com/search/all/", keyword: "metacritic", searchin: true, bangs: "mc" },
  
    // Noticias
    { name: "BBC News", url: "https://www.bbc.co.uk/search?q=", keyword: "bbc", searchin: true, bangs: "bbc" },
    { name: "CNN", url: "https://www.cnn.com/search?q=", keyword: "cnn", searchin: true, bangs: "cnn" },
    { name: "New York Times", url: "https://www.nytimes.com/search?query=", keyword: "nyt", searchin: true, bangs: "nyt" },
    { name: "The Guardian", url: "https://www.theguardian.com/uk/search?q=", keyword: "guardian", searchin: true, bangs: "tg" },
    { name: "Reuters", url: "https://www.reuters.com/site-search/?query=", keyword: "reuters", searchin: true, bangs: "reuters" },
    { name: "Associated Press", url: "https://apnews.com/search/", keyword: "apnews", searchin: true, bangs: "ap" },
    { name: "Al Jazeera", url: "https://www.aljazeera.com/search/", keyword: "aljazeera", searchin: true, bangs: "aj" },
    { name: "Yahoo News", url: "https://news.search.yahoo.com/search?p=", keyword: "yahoo news", searchin: true, bangs: "yn" },
    { name: "MSNBC", url: "https://www.msnbc.com/search?q=", keyword: "msnbc", searchin: true, bangs: "msnbc" },
    { name: "TechCrunch", url: "https://search.techcrunch.com/search;?q=", keyword: "techcrunch", searchin: true, bangs: "tc" },
    { name: "The Verge", url: "https://www.theverge.com/search?q=", keyword: "theverge", searchin: true, bangs: "verge" },
    { name: "Wired", url: "https://www.wired.com/search/?q=", keyword: "wired", searchin: true, bangs: "wired" },
  
    // Musica
    { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
    { name: "Apple Music", url: "https://music.apple.com/us/search?term=", keyword: "apple music", searchin: true, bangs: "am" },
    { name: "YouTube Music", url: "https://music.youtube.com/search?q=", keyword: "ytmusic", searchin: true, bangs: "ytm" },
    { name: "SoundCloud", url: "https://soundcloud.com/search?q=", keyword: "soundcloud", searchin: true, bangs: "sc" },
    { name: "Bandcamp", url: "https://bandcamp.com/search?q=", keyword: "bandcamp", searchin: true, bangs: "bc" },
  
  ];

  // Almacena la lista predeterminada en localStorage
  localStorage.setItem('engines', JSON.stringify(searchEngines));
}




// ---------------------------------------------------------------------------



// noise + background
const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');
const background = document.getElementById('background');

// Configurar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generar círculos aleatorios
function generateCircles() {
      const numCircles = 10; // Cantidad de círculos a generar
      for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Generar tamaño, posición y animación aleatorios
        const size = Math.random() * 400 + 200; // Tamaño entre 200px y 600px
        const top = Math.random() * 100; // Posición vertical (0% a 100%)
        const left = Math.random() * 100; // Posición horizontal (0% a 100%)
        const animationDelay = Math.random() * 5; // Retraso aleatorio en la animación

        // Aplicar estilos al círculo
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${top}%`;
        circle.style.left = `${left}%`;
        circle.style.animationDelay = `${animationDelay}s`;

        background.appendChild(circle);
      }
}


window.onload = () => {
  const canvas = document.getElementById('noiseCanvas');
  const ctx = canvas.getContext('2d');
};

// Generar ruido en el canvas
function generateNoise() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const gray = Math.random() * 255; // Valor aleatorio para cada píxel
        pixels[i] = gray;     // Rojo
        pixels[i + 1] = gray; // Verde
        pixels[i + 2] = gray; // Azul
        pixels[i + 3] = 10;   // Opacidad más baja para ruido suave
      }

      ctx.putImageData(imageData, 0, 0);
  }

// Llamar a las funciones para generar los elementos
generateCircles();
//generateNoise();
    
document.addEventListener("DOMContentLoaded", () => {
      generateNoise();
});

// ---------------------------------------------------------------------------






// custom search engine
const suggestionsList = document.getElementById("suggestions-list");
let currentEngineIndex = 0;

// update search engine list in html settings
function addSearchEnginesToList(){
  const selectElement = document.getElementById('SearchEngineDefault');

  // Agregar las opciones al <select>
  searchEngines.forEach(engine => {
    if(engine.searchin){

      const option = document.createElement('option');
      option.value = engine.name;
      option.textContent = engine.name;
      selectElement.appendChild(option);
    }
  });
}


// Función para mostrar sugerencias
function showSuggestions(query) {
  // Filtramos los motores según la consulta 
  const filteredEngines = searchEngines.filter(engine =>
    engine.keyword.startsWith(query.toLowerCase())
  );
  suggestionsList.innerHTML = '';

  if (filteredEngines.length > 0) {
    suggestionsList.style.display = 'block';

    filteredEngines.forEach((engine, index) => {
      // Contenedor de la sugerencia
      const suggestionContainer = document.createElement('div');
      suggestionContainer.classList.add("suggestion");
      suggestionContainer.style.display = "flex";
      suggestionContainer.style.justifyContent = "space-between";
      suggestionContainer.style.alignItems = "center";
      suggestionContainer.style.padding = "5px";
      //suggestionContainer.style.borderBottom = "1px solid rgb(255 255 255 / 11%)"; // separador (opcional)


      // IZQUIERDA: Elemento focusable que redirige al sitio (SVG + nombre)
      const leftPart = document.createElement('span');
      leftPart.classList.add("suggestion-left");
      leftPart.tabIndex = 0; // Focusable por Tab
      leftPart.style.display = "flex";
      leftPart.style.alignItems = "center";
      leftPart.style.cursor = "pointer";

      // Crear el SVG (igual que en tu código)
      const svgSpan = document.createElement('span');
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 256 256");
      svg.setAttribute("style", "width: 24px; margin-right: 10px;");
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("fill", "none");
      rect.setAttribute("height", "256");
      rect.setAttribute("width", "256");
      const polyline1 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polyline1.setAttribute("fill", "none");
      polyline1.setAttribute("points", "232 56 136 152 96 112 24 184");
      polyline1.setAttribute("stroke-linecap", "round");
      polyline1.setAttribute("stroke-linejoin", "round");
      polyline1.setAttribute("stroke-width", "16");
      const polyline2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polyline2.setAttribute("fill", "none");
      polyline2.setAttribute("points", "232 120 232 56 168 56");
      polyline2.setAttribute("stroke-linecap", "round");
      polyline2.setAttribute("stroke-linejoin", "round");
      polyline2.setAttribute("stroke-width", "16");
      const color = '#c9c9c9';
      polyline1.setAttribute("stroke", color);
      polyline2.setAttribute("stroke", color);
      svg.appendChild(rect);
      svg.appendChild(polyline1);
      svg.appendChild(polyline2);
      svgSpan.appendChild(svg);

      // Nombre del motor
      const engineNameSpan = document.createElement('span');
      engineNameSpan.textContent = engine.name;

      leftPart.appendChild(svgSpan);
      leftPart.appendChild(engineNameSpan);

      // Eventos para redirigir al hacer click o presionar Enter en la parte izquierda
      leftPart.addEventListener('click', () => {
        window.location.href = engine.url;
      });
      leftPart.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          window.location.href = engine.url;
        }
      });

      // Agregar las dos partes al contenedor de la sugerencia
      suggestionContainer.appendChild(leftPart);

      // search in
      if(engine.searchin == true){
        // DERECHA: Botón "engine" para definir el buscador
        const rightPart = document.createElement('span');
        rightPart.classList.add("suggestion-engine");
        rightPart.tabIndex = 0; // Focusable
        rightPart.textContent = "Search In";
        rightPart.style.width = "60px";
        

        // Eventos para definir el buscador
        rightPart.addEventListener('click', (e) => {
          e.stopPropagation();
          changeSearchEngine(engine);
          searchInput.focus();
        });
        rightPart.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            changeSearchEngine(engine);
            searchInput.focus();
          }
        });
        suggestionContainer.appendChild(rightPart);
      }


      suggestionsList.appendChild(suggestionContainer);
    });
  } else {
    suggestionsList.style.display = 'none';
  }
}

// Función para cambiar el buscador y vaciar el input
function changeSearchEngine(engine) {
  searchForm.action = engine.url;
  searchInput.placeholder = `Search in ${engine.name}`;
  searchInput.value = "";
  suggestionsList.style.display = 'none';
  currentSerchEngine = engine.url;
}

// Evento para mostrar sugerencias mientras se escribe
searchInput.addEventListener('input', function() {
  const query = searchInput.value.trim();
  if (query.length > 0 && settingShowSuggestion === true) {
    showSuggestions(query);
  } else {
    suggestionsList.style.display = 'none';
  }
});

// Al presionar Tab desde el input, se enfoca la primera sugerencia
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Tab' && suggestionsList.style.display === 'block') {
    event.preventDefault();
    const firstLeft = suggestionsList.querySelector('.suggestion-left');
    if (firstLeft) {
      firstLeft.focus();
    }
  }
});


function getSearchEngineByName(name) {
  return searchEngines.find(engine => engine.name === name);
}

// Event listener para el select engine de settings
document.getElementById("backgroundStyle").addEventListener("change", function (event) {
  var value = event.target.value;

  updateBackgroundSetting(value);
  updateSettings("BackgroundStyle", value);
});

// update search engine config
document.getElementById("SearchEngineDefault").addEventListener("input", (event) => {
  updateSettings("DefaultSearchEngine", document.getElementById("SearchEngineDefault").value);
});

/*
searchForm.addEventListener("submit", function (event) {
  if(LoadingOverlay){
    document.getElementById("loadOverlay").style.visibility = "unset";
    document.getElementById("loadOverlay").hidden = false;
  }
  
});*/

// Crear un índice de bangss para acceso rápido
const bangsIndex = searchEngines
  .filter(engine => engine.searchin && engine.bangs)
  .reduce((acc, engine) => {
    acc[engine.bangs] = engine;
    return acc;
  }, {});



searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío por defecto

  // Mostrar el overlay de carga, si existe
  if (typeof LoadingOverlay !== "undefined") {
    document.getElementById("loadOverlay").style.visibility = "unset";
    document.getElementById("loadOverlay").hidden = false;
  }

  let query = searchInput.value.trim();
  // if searchBangs enabled
  if(CurrentSettings["searchBangs"] == true){

    // Verificar si el query contiene un bangs al final
    const parts = query.split(" ");
    const lastPart = parts[parts.length - 1];

    if (lastPart.startsWith("!")) {
      // Extraer el comando sin el signo "!"
      const bang = lastPart.slice(1);
      // Remover el comando de la cadena de búsqueda
      parts.pop();
      query = parts.join(" ");

      // Buscar en el índice el motor con ese bangs
      const engine = bangsIndex[bang];
      if (engine) {
        const url = engine.url + encodeURIComponent(query);
        window.location.href = url;
        return;
      }
    }
  }
  

  // window.location.href = getSearchEngineByName(CurrentSettings["DefaultSearchEngine"])["url"] + encodeURIComponent(query);
  //console.log(getSearchEngineByName(CurrentSettings["DefaultSearchEngine"])["url"]);
  window.location.href = currentSerchEngine + encodeURIComponent(query);
 
});






// ---------------------------------------------------------------------------------------
// floating menu
const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menu.classList.toggle("open");
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", function(event) {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("open");
  }
});


function showMoreLess(id, value){
  function obtenerElementos(contenedor) {
    return Array.from(contenedor.children);
  }

  var container = document.getElementById(`capsule${id}`);
  const elementos = obtenerElementos(container);

  var b = "visible";
  var containerSize = "auto";
  if(value == false){
    b = "hidden";
    containerSize = "45px";
  }

  container.style.transition = "0.2s";

  for(e of elementos){
    e.style.visibility = b;
  }
  elementos[0].style.visibility = "visible";

  container.style.height = containerSize;
}






// ---------------------------------------------------------------------------------------
// define settings event listener       (switch buttons color pikers  button reset etc)

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los contenedores con el botón y el input
  const colorPickerContainers = document.querySelectorAll(".color-picker-container");
  
  colorPickerContainers.forEach(container => {
    
    const button = container.querySelector(".color-button"); // Botón asociado
    const colorPicker = container.querySelector(".color-picker"); // Input de color asociado
    
    // Al hacer clic en el botón, abrir el color picker
    button.addEventListener("click", () => {
        colorPicker.click();
    });

    // Cambiar el color del botón al seleccionar un color
    colorPicker.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        button.style.backgroundColor = selectedColor; // Cambiar el fondo del botón
        //button.textContent = selectedColor; // Mostrar el color seleccionado
        updateSettings(button.id, selectedColor);
        
    });
  });

  // Obtener todos los checkboxes dentro del menú y asignarles un evento 'click'
  document.querySelectorAll(".menu input[type='checkbox']").forEach(input => {
      input.onclick = function () {
          updateSettings(this.id, this.checked);
      };
  });

  // Botón de Reset
  const resetButton = document.getElementById("resetButton");
  if (resetButton) {
      resetButton.onclick = function () {
          resetSettings(CurrentSettings);
      };
  }



  // logo style
  document.getElementById("myLogo").addEventListener("input", (event) => {
    var myvalue = document.getElementById("myLogo").value;
    updateSettings("LogoStyle", myvalue);
  });
  



  //clock
  function updateClock() {
    if(ShowClock== false){return;}


    let showSeconds = CurrentSettings["ShowClockSeconds"]; // Cambia a true si quieres mostrar los segundos
    let use12HourFormat = CurrentSettings["ClockFormat"]; // Cambia a false para usar el formato de 24 horas


    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = ":" + now.getSeconds().toString().padStart(2, '0');


    let period = ""; // Variable para AM o PM

    if (use12HourFormat == 1) {
        period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convierte 0 a 12 en formato de 12 horas
    }

    hours = hours.toString().padStart(2, '0');

    if (showSeconds == false) {
        seconds = "";
    }

    document.getElementById('myClock').textContent = `${hours}:${minutes}${seconds} ${period}`;
  }

  // Actualiza la hora inmediatamente y cada segundo
  updateClock();
  setInterval(updateClock, 1000);

  document.getElementById("ClockFormat").addEventListener("input", (event) => {
    updateClock();
    updateSettings("ClockFormat", document.getElementById("ClockFormat").value);
  });

  document.getElementById("ClockTheme").addEventListener("input", (event) => {
    updateSettings("ClockTheme", document.getElementById("ClockTheme").checked);
  });
  
  
});






// ---------------------------------------------------------------------------------------
// general settings
  


  var settingShowSuggestion = true;
  var LoadingOverlay = true;

  // 1. Función para inicializar los ajustes, ya sea desde localStorage o con valores predeterminados
  function initializeSettings() {
    // Verificar si existe "BS-Setting" en localStorage
    var xd = localStorage.getItem("BS-Setting");
    if (xd) {
      // Si existe, cargar la configuración desde localStorage
      CurrentSettings = JSON.parse(xd);
      console.log("Settings Found");
    } else {
      // Si no existe, crear el JSON con los valores predeterminados
      CurrentSettings = {
        //ShowTitle: false,
        //ShowLogo: true,
        LogoStyle: "Logo3",
        LogoTheme: true,
        LoadingOverlay: true,
      
        DefaultSearchEngine: "Google",
        Suggestions: true,
        SearchBarTheme: true,
        ShowSearchBar: true,
        searchBangs: true,
      
        BackgroundColor: "#545cc4",
        CirclesColor: "#212c87",
        Noise: true,
        
        BackgroundStyle: "Solid",
        BackgroundImageFiles: [defaultImage],
        backgrodunActualImage: defaultImage,
        backgroundValues: [100, 0],
      
        ShowWeather: false,
        Latitude: 0,
        Longitude: 0,
        Fahrenheit: false,
      
        ShowClock: false,
        ClockFormat: 0,
        ShowClockSeconds: false,
        ClockTheme: true,
      };
      localStorage.setItem("BS-Setting", JSON.stringify(defaultSettings));
      console.log("New Settings created");
    }
    return CurrentSettings;
  }

  // 2. Función para actualizar los ajustes en localStorage y en el objeto CurrentSettings
  function updateSettings(key, value) {
    // Verifica si la clave existe en el objeto
    if (key in CurrentSettings) {
      // Actualiza la clave con el nuevo valor
      CurrentSettings[key] = value;

      // Guarda los cambios en localStorage
      localStorage.setItem("BS-Setting", JSON.stringify(CurrentSettings));
      console.log(`Configuración actualizada: ${key} = ${value}`);

      applySettings(CurrentSettings);
    } else {
      console.error(`La clave "${key}" no existe en la configuración.`);
    }
  }

  // 3. Función para aplicar los ajustes desde CurrentSettings al documento
  function applySettings(CurrentSettings) {

    // Aplicar el color de fondo
    document.body.style.backgroundColor = CurrentSettings["BackgroundColor"];
    //console.log("Background color actualizado:", CurrentSettings["BackgroundColor"]);

    // Aplicar el color de los círculos
    let circles = document.getElementsByClassName("circle");
    for (let i = 0; i < circles.length; i++) {
      circles[i].style.backgroundColor = CurrentSettings["CirclesColor"];// "radial-gradient(circle,"+ CurrentSettings["CirclesColor"] + ", rgba(0, 0, 0, 0)), rgba(0, 0, 0, 0))";
    }

    // Aplicar la visibilidad de ruido (si la propiedad Noise está habilitada o no)
    document.getElementById("noiseCanvas").hidden = !CurrentSettings["Noise"];
    
    // aplica las suggestions
    settingShowSuggestion = CurrentSettings["Suggestions"];

    // settings title
    document.getElementById("settingsTitle").style.background = `linear-gradient(to right, ${CurrentSettings["BackgroundColor"]}, ${CurrentSettings["CirclesColor"]})`;
    document.getElementById("contactCapsule").style.background = `linear-gradient(to right, ${CurrentSettings["BackgroundColor"]}, ${CurrentSettings["CirclesColor"]})`;
    
    //logo style / theme
    updateLogo(CurrentSettings["LogoStyle"]);// change logo
    updateLogoTheme(CurrentSettings["LogoTheme"]);// define theme
    document.getElementById("LogoTheme").checked = CurrentSettings["LogoTheme"];// update switch

    // update settingpanel content
    document.getElementById("Noise").checked = CurrentSettings["Noise"];
    document.getElementById("Suggestions").checked = CurrentSettings["Suggestions"];

    document.getElementById("BackgroundColor").style.backgroundColor = CurrentSettings["BackgroundColor"];
    document.getElementById("BackgroundColorPicker").value = CurrentSettings["BackgroundColor"];

    document.getElementById("CirclesColor").style.backgroundColor = CurrentSettings["CirclesColor"];
    document.getElementById("CirclesColorPicker").value = CurrentSettings["CirclesColor"];

    document.getElementById("SearchEngineDefault").value = CurrentSettings["DefaultSearchEngine"];
    let currentSerchEngine = CurrentSettings["DefaultSearchEngine"]; // define the current search engine

    //document.getElementById("ShowLogo").checked = CurrentSettings["ShowLogo"];
    //document.getElementById("ShowTitle").checked = CurrentSettings["ShowTitle"];
    document.getElementById("LoadingOverlay").checked = CurrentSettings["LoadingOverlay"];
    document.getElementById("SearchBarTheme").checked = CurrentSettings["SearchBarTheme"];
    document.getElementById("ShowSearchBar").checked = CurrentSettings["ShowSearchBar"];

    document.getElementById("ShowWeather").checked = CurrentSettings["ShowWeather"];
    document.getElementById("Fahrenheit").checked = CurrentSettings["Fahrenheit"];
    Fahrenheit = CurrentSettings["Fahrenheit"];
    document.getElementById("Longitude").value = CurrentSettings["Longitude"];
    document.getElementById("Latitude").value = CurrentSettings["Latitude"];
    
    document.getElementById("searchBangs").checked = CurrentSettings["searchBangs"];

    //background
    document.getElementById("backgroundStyle").value = CurrentSettings["BackgroundStyle"];
    updateBackgroundSetting(CurrentSettings["BackgroundStyle"]);
    updateBackgroundValues(CurrentSettings["backgroundValues"][0], CurrentSettings["backgroundValues"][1]);// bright and blur

    // reset backgroundlist
    document.getElementById('backgroundList').innerHTML ="";
    for(e of CurrentSettings["BackgroundImageFiles"]){
      addBackgroundItem(e);
    }
    //define current background image
    document.getElementById("backgroundImage").style.backgroundImage = CurrentSettings["backgrodunActualImage"];

    
    //update show more/less menu
    showMoreLess("ShowWeather", CurrentSettings["ShowWeather"]);
    showMoreLess("ShowSearchBar", CurrentSettings["ShowSearchBar"]);
    showMoreLess("ShowClock", CurrentSettings["ShowClock"]);

    // update settings panel colors
    var activeColor = CurrentSettings["CirclesColor"];

    document.getElementById("addBackground").style.backgroundColor = activeColor;

    updateSwitch("SuggestionsSlider", CurrentSettings["Suggestions"], activeColor);
    updateSwitch("NoiseSlider", CurrentSettings["Noise"], activeColor);
    
    updateSwitch("searchBangsSlider", CurrentSettings["searchBangs"], activeColor);
    document.getElementById("resetButton").style.backgroundColor = activeColor;
   // updateSwitch("ShowLogoSlider", CurrentSettings["ShowLogo"], activeColor);
   // updateSwitch("ShowTitleSlider", CurrentSettings["ShowTitle"], activeColor);
    updateSwitch("LoadingOverlaySlider", CurrentSettings["LoadingOverlay"], activeColor);
    updateSwitch("SearchBarThemeSlider", CurrentSettings["SearchBarTheme"], activeColor);
    updateSwitch("ShowSearchBarSlider",  CurrentSettings["ShowSearchBar"], activeColor);
    updateSwitch("ShowWeatherSlider",  CurrentSettings["ShowWeather"], activeColor);
    updateSwitch("FahrenheitSlider",  CurrentSettings["Fahrenheit"], activeColor);
    updateSwitch("LogoThemeSlider", CurrentSettings["LogoTheme"], activeColor);
    updateSwitch("ShowClockSlider", CurrentSettings["ShowClock"], activeColor);
    updateSwitch("ShowClockSecondsSlider", CurrentSettings["ShowClockSeconds"], activeColor);
    updateSwitch("ClockThemeSlider", CurrentSettings["ClockTheme"], activeColor);

    // clock menu settings
    document.getElementById("ShowClock").checked = CurrentSettings["ShowClock"];
    document.getElementById("ClockFormat").value = CurrentSettings["ClockFormat"];
    document.getElementById("ShowClockSeconds").checked = CurrentSettings["ShowClockSeconds"];
    document.getElementById("ClockTheme").checked = CurrentSettings["ClockTheme"];
    updateVisibility("clockContainer", CurrentSettings["ShowClock"]);
    updateClockTheme();

    // loader color 
    document.getElementById("loader").style.borderTopColor = activeColor;
    
    // update visibility text
    //updateVisibility("Logo", CurrentSettings["ShowLogo"]);
    //updateVisibility("Title", CurrentSettings["ShowTitle"]);
    updateVisibility("weather", CurrentSettings["ShowWeather"]);
    updateVisibility("search-container", CurrentSettings["ShowSearchBar"]);

    //loading overlay visibility
    LoadingOverlay = CurrentSettings["LoadingOverlay"];

    //change default search engine
    changeSearchEngine(getSearchEngineByName(CurrentSettings["DefaultSearchEngine"]));

    //apply searchbar theme
    applySearchBarTheme(CurrentSettings["SearchBarTheme"]);

    /* update logo color
    var logolist = ["discordIcon", "donationIcon", "githubIcon"];
    for (e of logolist){
      document.getElementById(e).style.fill = activeColor;
    }*/


    //set logo
    function updateLogo(logo){

      // update visibility
      for (let i = 1; i < 10 +1; i++) {
        try{
          document.getElementById(`Logo${i}`).style.display = "none";
        }catch{}
        
      }

      if(logo != "Logo0"){
        document.getElementById(`${logo}`).style.display = "flex"; 
      }
      
      // update switch
      document.getElementById("myLogo").value = logo;

    }

    function updateLogoTheme(theme){
      
      var color = "#c9c9c9"; // white
      if (theme == false){
        color = "#151516";
      }

      for (e of document.getElementsByClassName("searchIcon")){
        e.style.fill = color;
      }

    }

    function updateSwitch(slider, value, activeColor){
      slider = document.getElementById(slider);
      if(value){
        slider.style.backgroundColor = activeColor;
      }
      else{
        slider.style.backgroundColor = "#464545";
      }

    }
    
    function updateVisibility(element, status){
      element = document.getElementById(element);

      element.hidden = !status;
      if(status){
        element.style.visibility = "visible";
      }else{
        element.style.visibility = "hidden";
      }
    }
    
    function applySearchBarTheme(value){
      var element = document.getElementById("search-form");
      var element2 = document.getElementById("suggestions-list");
      var element3 = document.getElementById("weather");

      if(value == true){
        element.classList.add("SearchBarWhiteTheme");
        element2.classList.add("whiteSuggestions");
        element3.classList.add("SearchBarWhiteTheme");
      }
      else{
        element.classList.remove("SearchBarWhiteTheme");
        element2.classList.remove("whiteSuggestions");
        element3.classList.remove("SearchBarWhiteTheme");
      }
    }

    function updateClockTheme(){
      var color = "#c9c9c9"; // white
      if (CurrentSettings["ClockTheme"]== false){
        color = "#151516";
      }
      document.getElementById("myClock").style.color = color;

    }


    getWeather();
    
  }

  // 4. Función para resetear los ajustes a los predeterminados y aplicar los cambios
  function resetSettings() {
    // Elimina la configuración de localStorage
    localStorage.setItem("BS-Setting", JSON.stringify(defaultSettings));

    // reset background image
    document.getElementById("backgroundImage").style.backgroundImage = `url(${defaultImage})`;
    
    // reset engine list
    searchEngines = [
      // Motores de búsqueda generales
      { name: "Google", url: "https://www.google.com/search?q=", keyword: "google", searchin: true, bangs: "g" },
      { name: "Google Images", url: "https://www.google.com/search?tbm=isch&q=", keyword: "google images", searchin: true, bangs: "gi" },
      { name: "Google Maps", url: "https://www.google.com/maps/search/", keyword: "google maps", searchin: true, bangs: "gmaps" },
      { name: "Bing", url: "https://www.bing.com/search?q=", keyword: "bing", searchin: true, bangs: "b" },
      { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", keyword: "duckduckgo", searchin: true, bangs: "d" },
      { name: "Yahoo", url: "https://search.yahoo.com/search?p=", keyword: "yahoo", searchin: true, bangs: "y" },
      { name: "Brave Search", url: "https://search.brave.com/search?q=", keyword: "brave", searchin: true, bangs: "brave" },
    
      // Herramientas de Google y productividad
      { name: "Google Translate", url: "https://translate.google.com/?sl=auto&tl=en&text=", keyword: "translator", searchin: true, bangs: "tr" },
      { name: "Google Docs", url: "https://docs.google.com/document/u/0/", keyword: "docs", searchin: true, bangs: "gd" },
      { name: "Google Scholar", url: "https://scholar.google.com/scholar?q=", keyword: "scholar", searchin: true, bangs: "gs" },
      { name: "Microsoft Academic", url: "https://academic.microsoft.com/search?q=", keyword: "microsoft academic", searchin: true, bangs: "ma" },
    
      // art
      { name: "Pixiv", url: "https://www.pixiv.net/en/tags/", keyword: "pixiv", searchin: true, bangs: "px" },
      { name: "Unsplash", url: "https://unsplash.com/s/photos/", keyword: "unsplash", searchin: true, banger: "us" },
    
      // Redes sociales
      { name: "YouTube", url: "https://www.youtube.com/results?search_query=", keyword: "youtube", searchin: true, bangs: "yt" },
      { name: "Twitter", url: "https://twitter.com/search?q=", keyword: "twitter", searchin: true, bangs: "tw" },
      { name: "TikTok", url: "https://www.tiktok.com/search?q=", keyword: "tiktok", searchin: true, bangs: "tt" },
      { name: "Instagram", url: "https://www.instagram.com/explore/tags/", keyword: "instagram", searchin: true, bangs: "ig" },
      { name: "Facebook", url: "https://www.facebook.com/search/top?q=", keyword: "facebook", searchin: true, bangs: "fb" },
      { name: "Reddit", url: "https://www.reddit.com/search?q=", keyword: "reddit", searchin: true, bangs: "r" },
      { name: "LinkedIn", url: "https://www.linkedin.com/search/results/all/?keywords=", keyword: "linkedin", searchin: true, bangs: "li" },
    
      // Compras
      { name: "Amazon", url: "https://www.amazon.com/s?k=", keyword: "amazon", searchin: true, bangs: "a" },
      { name: "eBay", url: "https://www.ebay.com/sch/i.html?_nkw=", keyword: "ebay", searchin: true, bangs: "eb" },
      { name: "AliExpress", url: "https://www.aliexpress.com/wholesale?SearchText=", keyword: "aliexpress", searchin: true, bangs: "ae" },
      { name: "MercadoLibre", url: "https://www.mercadolibre.com.ar/jm/search?as_word=", keyword: "mercadolibre", searchin: true, bangs: "ml" },
      { name: "Walmart", url: "https://www.walmart.com/search?q=", keyword: "walmart", searchin: true, bangs: "wm" },
    
      // Tecnología y desarrollo
      { name: "GitHub", url: "https://github.com/search?q=", keyword: "github", searchin: true, bangs: "gh" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/search?q=", keyword: "stackoverflow", searchin: true, bangs: "so" },
      { name: "DevDocs", url: "https://devdocs.io/#q=", keyword: "devdocs", searchin: true, bangs: "dd" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/search?q=", keyword: "mdn", searchin: true, bangs: "mdn" },
    
      // Inteligencia Artificial
      { name: "ChatGPT", url: "https://chat.openai.com/", keyword: "chatgpt", searchin: true, bangs: "cg" },
      { name: "Perplexity AI", url: "https://www.perplexity.ai/search?q=", keyword: "perplexity", searchin: true, bangs: "px" },
      { name: "Bing AI", url: "https://www.bing.com/chat", keyword: "bingai", searchin: true, bangs: "ba" },
      { name: "Google Bard", url: "https://bard.google.com/", keyword: "bard", searchin: true, bangs: "br" },
    
      // Entretenimiento
      { name: "Netflix", url: "https://www.netflix.com/search?q=", keyword: "netflix", searchin: true, bangs: "nf" },
      { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
      { name: "Disney+", url: "https://www.disneyplus.com/search/", keyword: "disney+", searchin: true, bangs: "dp" },
      { name: "Prime Video", url: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=", keyword: "prime video", searchin: true, bangs: "pv" },
      { name: "HBO Max", url: "https://www.hbomax.com/search?q=", keyword: "hbo max", searchin: true, bangs: "hb" },
      { name: "Twitch", url: "https://www.twitch.tv/search?term=", keyword: "twitch", searchin: true, bangs: "twch" },
      { name: "Letterboxd", url: "https://letterboxd.com/search/", keyword: "letterboxd", searchin: true, bangs: "lb" },
      { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=", keyword: "crunchyroll", searchin: true, bangs: "cr" },
      
      // books
      { name: "MangaDex", url: "https://mangadex.org/search?q=", keyword: "mangadex", searchin: true, bangs: "md" },
      { name: "MangaUpdates", url: "https://www.mangaupdates.com/series.html?search=", keyword: "mangaupdates", searchin: true, bangs: "mu" },
      { name: "NovelUpdates", url: "https://www.novelupdates.com/?s=", keyword: "novelupdates", searchin: true, bangs: "nu" },
      { name: "Google Books", url: "https://books.google.com/books?q=", keyword: "google books", searchin: true, bangs: "gb" },
      { name: "Goodreads", url: "https://www.goodreads.com/search?q=", keyword: "goodreads", searchin: true, bangs: "gr" },
      { name: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/search/?query=", keyword: "gutenberg", searchin: true, bangs: "pg" },
      { name: "LibriVox", url: "https://librivox.org/search?q=", keyword: "librivox", searchin: true, bangs: "lv" },
      { name: "BookBub", url: "https://www.bookbub.com/search?search_term=", keyword: "bookbub", searchin: true, bangs: "bb" },
      { name: "Amazon Books", url: "https://www.amazon.com/s?k=books&qid=&ref=nb_sb_noss", keyword: "amazon books", searchin: true, bangs: "ab" },
      { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/", keyword: "barnes", searchin: true, bangs: "bn" },
      { name: "BookFinder", url: "https://www.bookfinder.com/search/?keywords=", keyword: "bookfinder", searchin: true, bangs: "bf" },
      { name: "Open Library", url: "https://openlibrary.org/search?q=", keyword: "open library", searchin: true, bangs: "ol" },
    
      // Videojuegos
      { name: "Steam", url: "https://store.steampowered.com/search/?term=", keyword: "steam", searchin: true, bangs: "st" },
      { name: "Epic Games Store", url: "https://store.epicgames.com/en-US/browse?q=", keyword: "epic", searchin: true, bangs: "eg" },
      { name: "SteamDB", url: "https://steamdb.info/search/?a=app&q=", keyword: "steamdb", searchin: true, bangs: "sdb" },
      { name: "Kinguin", url: "https://www.kinguin.net/catalogsearch/result/?q=", keyword: "kinguin", searchin: false, bangs: "kg" },
      { name: "Steam Charts", url: "https://steamcharts.com/search?q=", keyword: "steam charts", searchin: true, bangs: "sc" },
      { name: "Humble Bundle", url: "https://www.humblebundle.com/store/search?sort=bestselling&search=", keyword: "humble", searchin: true, bangs: "hbundle" },
      { name: "Instant Gaming", url: "https://www.instant-gaming.com/en/search/?q=", keyword: "instant gaming", searchin: true, bangs: "igaming" },
      { name: "GOG", url: "https://www.gog.com/games?search=", keyword: "gog", searchin: true, bangs: "gog" },
      { name: "Metacritic", url: "https://www.metacritic.com/search/all/", keyword: "metacritic", searchin: true, bangs: "mc" },
    
      // Noticias
      { name: "BBC News", url: "https://www.bbc.co.uk/search?q=", keyword: "bbc", searchin: true, bangs: "bbc" },
      { name: "CNN", url: "https://www.cnn.com/search?q=", keyword: "cnn", searchin: true, bangs: "cnn" },
      { name: "New York Times", url: "https://www.nytimes.com/search?query=", keyword: "nyt", searchin: true, bangs: "nyt" },
      { name: "The Guardian", url: "https://www.theguardian.com/uk/search?q=", keyword: "guardian", searchin: true, bangs: "tg" },
      { name: "Reuters", url: "https://www.reuters.com/site-search/?query=", keyword: "reuters", searchin: true, bangs: "reuters" },
      { name: "Associated Press", url: "https://apnews.com/search/", keyword: "apnews", searchin: true, bangs: "ap" },
      { name: "Al Jazeera", url: "https://www.aljazeera.com/search/", keyword: "aljazeera", searchin: true, bangs: "aj" },
      { name: "Yahoo News", url: "https://news.search.yahoo.com/search?p=", keyword: "yahoo news", searchin: true, bangs: "yn" },
      { name: "MSNBC", url: "https://www.msnbc.com/search?q=", keyword: "msnbc", searchin: true, bangs: "msnbc" },
      { name: "TechCrunch", url: "https://search.techcrunch.com/search;?q=", keyword: "techcrunch", searchin: true, bangs: "tc" },
      { name: "The Verge", url: "https://www.theverge.com/search?q=", keyword: "theverge", searchin: true, bangs: "verge" },
      { name: "Wired", url: "https://www.wired.com/search/?q=", keyword: "wired", searchin: true, bangs: "wired" },
    
      // Musica
      { name: "Spotify", url: "https://open.spotify.com/search/", keyword: "spotify", searchin: true, bangs: "sp" },
      { name: "Apple Music", url: "https://music.apple.com/us/search?term=", keyword: "apple music", searchin: true, bangs: "am" },
      { name: "YouTube Music", url: "https://music.youtube.com/search?q=", keyword: "ytmusic", searchin: true, bangs: "ytm" },
      { name: "SoundCloud", url: "https://soundcloud.com/search?q=", keyword: "soundcloud", searchin: true, bangs: "sc" },
      { name: "Bandcamp", url: "https://bandcamp.com/search?q=", keyword: "bandcamp", searchin: true, bangs: "bc" },
    
    ];

    localStorage.setItem('searchEngines', JSON.stringify(searchEngines));
    renderEngineList();

    // Restablece la configuración a los valores predeterminados
    CurrentSettings = {
      //ShowTitle: false,
      //ShowLogo: true,
      LogoStyle: "Logo3",
      LogoTheme: true,
      LoadingOverlay: true,
    
      DefaultSearchEngine: "Google",
      Suggestions: true,
      SearchBarTheme: true,
      ShowSearchBar: true,
      searchBangs: true,
    
      BackgroundColor: "#545cc4",
      CirclesColor: "#212c87",
      Noise: true,
      
      BackgroundStyle: "Solid",
      BackgroundImageFiles: [defaultImage],
      backgrodunActualImage: defaultImage,
      backgroundValues: [100, 0],
    
      ShowWeather: false,
      Latitude: 0,
      Longitude: 0,
      Fahrenheit: false,
    
      ShowClock: false,
      ClockFormat: 0,
      ShowClockSeconds: false,
      ClockTheme: true,
    };

    // Aplica los ajustes predeterminados
    applySettings(defaultSettings);
    console.log("Configuración reseteada.");
  }

  // Inicialización de la configuración y aplicación de los ajustes
  var CurrentSettings = initializeSettings();
  applySettings(CurrentSettings); // Aplica los ajustes cargados o predeterminados


  






// ---------------------------------------------------------------------------------------
// weather

  var latitudeInput = document.getElementById("Latitude");
  var longitudeInput = document.getElementById("Longitude");

  latitudeInput.addEventListener("input", (event) => {
      updateSettings("Latitude", latitudeInput.value);
  });

  longitudeInput.addEventListener("input", (event) => {
      updateSettings("Longitude", longitudeInput.value);
  });

  async function getWeather() {//update weather
    if(CurrentSettings["ShowWeather"]==false){
      return;
    }

    try {
        var Latitude = document.getElementById("Latitude").value;
        var Longitude = document.getElementById("Longitude").value;

        // Define the API URL
        var fahrenheithText = "";
        var degreesFormat = "C";

        if(document.getElementById("Fahrenheit").checked){
          fahrenheithText = "temperature_unit=fahrenheit&";
          degreesFormat = "F";
        }
        const apiUrl = `https://api.open-meteo.com/v1/forecast?${fahrenheithText}latitude=${Latitude}&longitude=${Longitude}&hourly=temperature_2m`;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();

        // Get the current hour and temperature
        const currentHour = new Date().getHours();
        const temperature = data.hourly.temperature_2m[currentHour];

        // Display the temperature
        document.getElementById('temperature').textContent = `${temperature}° ${degreesFormat}`;
        console.log("updated");
    }
    catch (error) {
        console.error(error);
        document.getElementById('temperature').textContent = 'Unable to fetch weather data.';
    }
  }

  setInterval(getWeather, 3600000);







// ---------------------------------------------------------------------------------------
// background image

document.getElementById('addBackground').addEventListener('click', () => {
    const importOption = document.getElementById('importOption').value;

    if (importOption === "url") {
        const url = prompt("Enter image URL:");
        if (!url) return;
        addBackgroundItem(url);

        CurrentSettings["BackgroundImageFiles"].push(url);
        updateSettings("BackgroundImageFiles", CurrentSettings["BackgroundImageFiles"]);
    } else {
        document.getElementById('fileInput').click();
    }
});

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addBackgroundItem(e.target.result);

            CurrentSettings["BackgroundImageFiles"].push(e.target.result);
            updateSettings("BackgroundImageFiles", CurrentSettings["BackgroundImageFiles"]);
        };
        reader.readAsDataURL(file);
    }
});


function updateBackgroundSetting(value){

  var lista = ["Solid", "Image"];
  for(e of lista){
    document.getElementById(`backgroundStyle${e}`).hidden = true;
  }
  document.getElementById(`backgroundStyle${value}`).hidden = false;
  
  
  var backgroundImage = document.getElementById("backgroundImage");

  if(value == "Image"){
    backgroundImage.hidden = false;
  }else{
    backgroundImage.hidden = true;
  }

}


function removeBackgroundItem(content) {
  // Extraer solo la URL del background eliminando 'url("")'
  let extractedContent = content.replace(/^url\(["']?|["']?\)$/g, '');

  let index = CurrentSettings["BackgroundImageFiles"].findIndex(item => item.includes(extractedContent));
  if (index !== -1) {
      CurrentSettings["BackgroundImageFiles"].splice(index, 1);
      updateSettings("BackgroundImageFiles", CurrentSettings["BackgroundImageFiles"]);
  }

  if(CurrentSettings["backgrodunActualImage"].includes(extractedContent)){ // if actual background = to remove
    document.getElementById("backgroundImage").style.backgroundImage = defaultImage;
    updateSettings("backgrodunActualImage", defaultImage);
  }
}







// ---------------------------------------------------------------------------------------

//background filters 
function addBackgroundItem(imageUrl) {

  const bgItem = document.createElement('div');
  bgItem.classList.add('background-item');
  bgItem.style.backgroundImage = `url(${imageUrl})`;

  bgItem.addEventListener('click', () => {
      document.getElementById("backgroundImage").style.backgroundImage = `url(${imageUrl})`;
      updateSettings("backgrodunActualImage", `url(${imageUrl})`);
  });
  bgItem.style.marginLeft = "5px";


  // Botón para eliminar la imagen
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = '✖';

  removeBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Evita que el fondo cambie al hacer clic en el botón
      removeBackgroundItem(bgItem.style.backgroundImage);
      bgItem.remove();
      

  });

  bgItem.appendChild(removeBtn);
  document.getElementById('backgroundList').appendChild(bgItem);
}

var brightRange = document.getElementById("brightRange");
var blurRange = document.getElementById("blurRange");


brightRange.addEventListener("input", (event) => {
    updateBackgroundValues(brightRange.value, blurRange.value);
    updateSettings("backgroundValues", [brightRange.value, blurRange.value]);
});

blurRange.addEventListener("input", (event) => {
  updateBackgroundValues(brightRange.value, blurRange.value);
  updateSettings("backgroundValues", [brightRange.value, blurRange.value]);
});

function updateBackgroundValues(bright, blur){// update background bright and blur
  document.getElementById("backgroundImage").style.filter = `brightness(${bright}%)` + `blur(${blur}px)`;

  // refresh sliders
  document.getElementById("brightRange").value = bright;
  document.getElementById("blurRange").value = blur;
}







// ---------------------------------------------------------------------------------------
//  history

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Logo").addEventListener("click", (event) => {
    document.getElementById("historyContainer").style.visibility = "unset";

  });
  document.getElementById("closehistoy").addEventListener("click", (event) => {
    document.getElementById("historyContainer").style.visibility = "hidden";
  });
  
});

const historyList = document.getElementById('historyList');

function normalizeUrl(urlStr) {
  try {
    const url = new URL(urlStr);
    return url.origin + url.pathname; // Ignora parámetros y fragmentos
  } catch (err) {
    return urlStr;
  }
}

function loadSearchHistory() {
  
  historyList.innerHTML = '';// reset history

  // define api
  const historyAPI = chrome?.history || browser?.history;

  if (!historyAPI) {
    console.error("Api not avaible on this browser.");
    return;
  }

  // Buscar en el historial (modifica maxResults según lo que necesites)
  historyAPI.search({ text: '', maxResults: 50 }).then((historyItems) => {
    const addedUrls = new Set();

    historyItems.forEach((item) => {
      //console.log(item.title);
      const normalized = normalizeUrl(item.url);

      // Agregar solo si no se ha añadido ya (evita duplicados)
      if (!addedUrls.has(normalized)) {
        addedUrls.add(normalized);

        const li = document.createElement('li');
        li.textContent = item.title ? item.title : item.url;
        li.classList.add("historyItem");

        // redirect
        li.addEventListener('click', () => {
          window.location.href = item.url;
        });

        historyList.appendChild(li);
      }
    });
  }).catch(error => console.error("Error:", error));
}

try{
  loadSearchHistory();
}catch(error){console.log("Error at load History: " + error);}



// ---------------------------------------------------------------------------------------
//  add custom search enigne


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("engineSettings").addEventListener("click", (event) => {
    document.getElementById("searchEngineCustomContainer").style.visibility = "unset";
    menu.classList.remove("open");

  });
  document.getElementById("closeEngineSettings").addEventListener("click", (event) => {
    document.getElementById("searchEngineCustomContainer").style.visibility = "hidden";
  });
  
});


  // Función para renderizar la lista de motores en el contenedor
const renderEngineList = () => {
    const container = document.getElementById('engineListContainer');
    container.innerHTML = '';
    searchEngines.forEach((engine, index) => {
      // Crea un elemento para cada motor
      const engineItem = document.createElement('div');
      engineItem.classList.add('engine-item');
      engineItem.innerHTML = `
      <div class='customEngineItem'>
        <span>${engine.name} <a class="bangsStyle">!${engine.bangs}</a>  </span>
        
        <button class="delete-engine closeFloatingButton" data-index="${index}">
         ✖
        </button>
      </div>
      `;
      container.appendChild(engineItem);
    });

    // update settings search engine list
    document.getElementById('SearchEngineDefault').innerHTML = "";
    addSearchEnginesToList();
};

document.addEventListener('DOMContentLoaded', () => {
  // Si no hay motores guardados en localStorage, define una lista predeterminada
  
  // Renderiza la lista al cargar la página
  renderEngineList();

  // Manejador del submit del formulario para agregar un nuevo motor
  const form = document.getElementById('searchEngineForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    const keyword = document.getElementById('name').value;
    const bangs = document.getElementById('bangs').value;
    
    // Crea el objeto engine con la estructura deseada
    const newEngine = { name, url, keyword, searchin: true, bangs };
    searchEngines.push(newEngine);
    
    // Actualiza el localStorage
    localStorage.setItem('searchEngines', JSON.stringify(searchEngines));
    
    // Vuelve a renderizar la lista para incluir el nuevo motor
    renderEngineList();
    
    // Resetea el formulario
    form.reset();
  });


  // Utiliza event delegation para manejar la eliminación de motores
  document.getElementById('engineListContainer').addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('delete-engine')) {
      // Obtiene el índice del motor a eliminar desde el atributo data-index
      const index = e.target.getAttribute('data-index');
      searchEngines.splice(index, 1);
      
      // Actualiza el localStorage tras eliminar
      localStorage.setItem('searchEngines', JSON.stringify(searchEngines));
      
      // Vuelve a renderizar la lista
      renderEngineList();
    }
  });
});