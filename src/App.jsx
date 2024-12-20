import { SearchResults } from "./components/SearchResults/SearchResults";
import { Search } from "./components/Search/Search";
import Style from "./App.module.css"
import { SearchProvider } from "@searchContext/SearchContext";

function App() {
  return ( 
    <SearchProvider>
      <main className="container">
        <div className={Style.container}>
              <h2 className={Style.text}>WeatherNow</h2>
              <Search/>
        </div>
        <SearchResults/>
      </main>
    </SearchProvider>
  )
}

export default App
