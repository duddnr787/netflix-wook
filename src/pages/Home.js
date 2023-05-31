import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  return (
    <div className='Home'>
      <Banner />
      {/* <div className='main-container'>
        <h1>현재 인기있는 영화</h1>
        <MovieSlide movies={popularMovies} />
        <h1>최고의 흥행 영화</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>곧 개봉 영화</h1>
        <MovieSlide movies={upcomingMovies} />
      </div> */}
    </div>
  );
};

export default Home;