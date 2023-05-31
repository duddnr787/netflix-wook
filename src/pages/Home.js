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
    </div>
  );
};

export default Home;