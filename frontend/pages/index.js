import MovieList from '../components/movies/MovieList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <MovieList meetups={globalCtx.theGlobalObject.meetings} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;