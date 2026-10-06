import Timer from "./Component/Timer.jsx";
import SortFilter from "./Component/SortFilter.jsx";
import SearchFilter from "./Component/SearchFilter.jsx";
import Filter from "./Component/Filter.jsx";
import Fetch from "./Component/Fetch.jsx";
import FavouriteActor from "./Component/FavouriteActor.jsx";
import Car from "./Component/Car.jsx";
function App() {
  return(
    <>
    <h1>hello</h1>
    <FavouriteActor/>
    <Car/>
    <Timer/>
    <Fetch/>
    <SortFilter/>
    <Filter/>
    <SearchFilter/>
    </>

  )
    
  }
export default App;