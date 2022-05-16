 import React from 'react'
import StarRating from './StarRating'
 
 const MovieCard = ({movie}) => {
   return (
     <div className='movie-card'>
        <StarRating rating={movie.rating} />
         <h3> {movie.name}</h3>
         <img src={movie.image} alt="" />
         <p>{movie.date}</p>
       
     </div>
   )
 }
 
 export default MovieCard
 