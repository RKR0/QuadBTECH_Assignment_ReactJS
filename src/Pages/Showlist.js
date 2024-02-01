import React, { useEffect, useState } from 'react'
import Showcard from '../components/Showcard';
import "./Showlist.css" 
const Showlist = () => {
 

const [movies, setMovies] = useState([])

useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleBookNow = (movie) => {
    // Save selected movie details to local storage
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    // Redirect to the show details page
   // history.push('/showdetails');
  };

return (
    <div className='showlist'>
  {
    movies.map((movie,i)=>{
        return <Showcard movie={movie} key={i} onBookNow={() => handleBookNow(movie)}/>
    })
  }
  </div>
)
}


export default Showlist;