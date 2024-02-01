// BookShow.js
import React, { useState } from 'react';
import './BookShow.css';


const BookShow = ({ movieDetails, onClose,setShowAlert }) => {
  const [formData, setFormData] = useState({
    userName: '',
    cardDetails: '',
  });
  
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  
  };

 
 



  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form data if needed
    setFormData({
      userName: '',
      cardDetails: '',
    });
    // Close the popup after submission
    setShowAlert(true);
    onClose();
  };

  return (
    <div className="book-show-popup">
      <div className="book-show-content">
        <span className="close-popup" onClick={onClose}>&times;</span>
        <h2 >Book Now</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name:
            <input type="text" name="movieName" value={movieDetails?.name || ''} readOnly />
          </label>
          <label>
            Genre:
            <input type="text" name="genre" value={movieDetails?.genres ? movieDetails.genres.join(', ') : ''} readOnly />
          </label>
          <label>
            Your Name:
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
          </label>
          <label>
            Card Details:
            <input type="text" name="cardDetails" value={formData.cardDetails} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>  
    </div>
  );
};

export default BookShow;
