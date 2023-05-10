import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie)

  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, []);
  
  if(loading){
    return <ClipLoader color="#eee" loading={loading}  size={150} aria-label="Loading Spinner" data-testid="loader" />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <div className='main-container'>
        <h1>현재 인기있는 영화</h1>
        <MovieSlide movies={popularMovies} />
        <h1>최고의 시청자 영화</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>곧 개봉 영화</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default Home;