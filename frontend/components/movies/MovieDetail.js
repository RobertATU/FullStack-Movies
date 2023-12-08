import classes from './MovieDetail.module.css'
import Map from '../generic/Map'
import { Marker } from 'mapbox-gl';

function MovieDetail(props) {
    let lat = props;
    console.log(lat.lat);
    return (
       
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <h1>Director: {props.director}</h1>
            <h1>Review: {props.review}</h1>
            <h1>Film Location:</h1>
           <Map props = {lat}/>
           
    
        </section>
    )
}

export default MovieDetail