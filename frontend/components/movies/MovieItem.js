import Card from '../ui/Card';
import classes from './MovieItem.module.css';
import { useRouter } from 'next/router';

function MovieItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }
console.log(props)
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title}</h1>
          <h3>{props.director}</h3>
          
          
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MovieItem;
