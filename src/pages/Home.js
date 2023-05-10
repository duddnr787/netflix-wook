import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../component/Banner';
import { movieAction } from '../redux/actions/movieAction';

const Home = () => {
  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state=>state.movie)

  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[]);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />} 
    </div>
  );
};

export default Home;