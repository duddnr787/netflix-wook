import React from 'react';
//popularMovies에 있는 1번째 애를 배너로 만들거다.
const Banner = ({movie}) => {
  console.log(movie)
  return (
    <div className='banner' style={{backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` + ")"}}>
      <div className='banner-info'>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;