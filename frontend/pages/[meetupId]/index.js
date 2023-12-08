import MeetupDetail from '../../components/movies/MovieDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import MovieDetail from '../../components/movies/MovieDetail'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        let temp = globalCtx.theGlobalObject.meetings[ii]
        if (temp.movieId.trim() == router.query.meetupId.trim()) {
            returnVal = <MovieDetail image={temp.image} title={temp.title} review={temp.review} director = {temp.director} lat = {temp.lat} long = {temp.long} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
