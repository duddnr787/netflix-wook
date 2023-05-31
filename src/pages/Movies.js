import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
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
      
    </div>
  );
};

export default Movies;