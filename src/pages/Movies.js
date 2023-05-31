import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import MovieSlide from '../component/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';

const Movies = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie)

  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, []);

  if(loading){
    return <ClipLoader color="#eee" loading={loading}  size={150} aria-label="Loading Spinner" data-testid="loader" style={{margin: '0 auto'}}/>
  }

  return (
    <div>
      <div className='main-container'>
        <h1>현재 인기있는 영화</h1>
        <MovieSlide movies={popularMovies} />
        <h1>최고의 흥행 영화</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>곧 개봉 영화</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default Movies;