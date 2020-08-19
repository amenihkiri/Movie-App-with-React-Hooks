import React from 'react';
import "./MovieCard.css"
import Rate from "../Rate"

const MovieCard = ({movie:{image,rating,name,date,description}}) => {
    return (
      <div className='container'>
        <div className='movie'>
          <div className='movie-rating'>
            {/* <h1>{rating}</h1>  */}
            <Rate rating={rating} />
          </div>
          <div className='movie-img'>
            <img src={image}alt='movie poster' />
          </div>
          <div className='text-movie-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{name}</h2>
                <ul className='movie-gen'>
                  <p>{date}</p>
                </ul>
              </div>
            </div>
            <div className='mr-grid summary-row'>
              <h5>SUMMARY</h5>
              <p>{description}</p>
            </div>
            <div className='mr-grid action-row'>
              <div className='col2'>
                <div className='watch-btn'>
                  <h3>WATCH TRAILER</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  