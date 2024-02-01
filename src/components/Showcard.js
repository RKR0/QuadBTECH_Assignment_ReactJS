import React from 'react'
import {Card,CardBody,Button,CardTitle,CardSubtitle} from 'reactstrap'
import "./Showcard.css" 
import { Link } from 'react-router-dom'

const Showcard = ({movie,onBookNow}) => {
  console.log(movie)
  return (
    <Card className='card'>
  <img
    className="movie_img" alt="Sample"
    src={movie.show.image?movie.show.image.original:"https://www.proedsolutions.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg"}
  />
  <CardBody>
    <CardTitle tag="h5">
    {movie.show.name}
    </CardTitle>
    <CardSubtitle
      className="genere"
    >
     {
       movie.show.genres.map((genre) => {
       return <h6 className="genre" >{genre}</h6>
        })
                            }
    </CardSubtitle>
    <Link to={`show/${movie.show.id}`}>
    <Button className='bn' color='primary' onClick={onBookNow}>
      <b>Book Now</b>
    </Button>
    </Link>
  </CardBody>
</Card>
  )
}

export default Showcard