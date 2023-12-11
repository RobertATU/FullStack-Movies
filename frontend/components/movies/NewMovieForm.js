import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMovieForm.module.css';

function NewMovieForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const directorInputRef = useRef();
  const reviewInputRef = useRef();
  const longInputRef = useRef();
  const latInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDirector = directorInputRef.current.value;
    const enteredReview = reviewInputRef.current.value;
    const enteredLong = longInputRef.current.value;
    const enteredLat = latInputRef.current.value;
   
    const meetupData = {
      movieId: enteredTitle,
      title: enteredTitle,
      image: enteredImage,
      director: enteredDirector,
      review: enteredReview,
      long: enteredLong,
      lat: enteredLat
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Movie Title </label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Movie Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='director'>Director</label>
          <input type='text' required id='director' ref={directorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='review'>Review</label>
          <textarea
            id='review'
            required
            rows='5'
            ref={reviewInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='long'>Film Location Longitute</label>
          <input type='text' required id='long' ref={longInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='lat'>Film Location Latitude</label>
          <input type='text' required id='lat' ref={latInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Movie</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMovieForm;
