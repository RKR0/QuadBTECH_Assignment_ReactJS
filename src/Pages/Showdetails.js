import React, { useEffect, useState } from 'react';
import './Showdetails.css';
import BookShow from '../components/BookShow';
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
import { Alert,UncontrolledAlert } from 'reactstrap';

const Showdetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [showBookNow, setShowBookNow] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  useEffect(() => {
    // Retrieve selected movie details from local storage
    const selectedMovie = localStorage.getItem('selectedMovie');
    if (selectedMovie) {
      setMovieDetails(JSON.parse(selectedMovie));
    }
  }, []);

  const handleBookNow = () => {
    // Show the BookShow component
    setShowBookNow(true);
  };

  const handleClosePopup = () => {
    // Close the BookShow popup
    setShowBookNow(false);
  };

  return (
   
    
    <div className="movie_detail">
      <img
        className="movie_card_img" alt="Sample"
        src={movieDetails.show && movieDetails.show.image ? movieDetails.show.image.original : "https://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg"}
      />
      <div className="details">
        <h1>{movieDetails.show && movieDetails.show.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: movieDetails.show && movieDetails.show.summary }} />
        <p><b>Language: </b> {movieDetails.show && movieDetails.show.language }</p>
        <p><b>Genre: </b> {movieDetails.show && movieDetails.show.genres && movieDetails.show.genres.join(', ')}</p>
        <p><b>Duration: </b> {movieDetails.show && movieDetails.show.runtime }</p>
        <p><b>Rating: </b> {movieDetails.show && movieDetails.show.rating && movieDetails.show.rating.average}</p>
        
        <div className="buttons">
         
         <Button color="primary" onClick={handleBookNow}><b>Book Now</b></Button>
        </div>
      </div>
      {showBookNow && <BookShow movieDetails={movieDetails.show} onClose={handleClosePopup} setShowAlert={setShowAlert}/>}
      {showAlert && (
      <div className="alert-container">
       
        <Alert color="success" isOpen={visible} toggle={onDismiss} >
          Hey! Your Booking is Confirmed
        </Alert>
        </div>
      )}
    </div>
    
    

   
  );
};

export default Showdetails;
