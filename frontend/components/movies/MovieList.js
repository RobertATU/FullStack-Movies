import MeetupItem from './MovieItem';
import classes from './MovieList.module.css';

function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id}
          id={meetup.movieId}
          image={meetup.image}
          title={meetup.title}
          director={meetup.director}
        />
      ))}
    </ul>
  );
}

export default MovieList;
