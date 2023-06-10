import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const MovieSlide = ({ movies }) => {
  return (
    <div className="movieSlide" >
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500}  >
        {movies.results.map((item) =>
          <MovieCard item={item} />
        )}
      </Carousel>
    </div>
  );
};

export default MovieSlide;