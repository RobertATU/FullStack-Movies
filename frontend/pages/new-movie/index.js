// our-dimain.com/new-movie
import NewMovieForm from '../../components/movies/NewMovieForm'
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewMeetupPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addMeetupHandler(enteredMeetupData)  {
        await globalCtx.updateGlobals({cmd: 'addMeeting', newVal: enteredMeetupData})
        router.push('/');
    }

    return <NewMovieForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage