import React from 'react';
import { Badge, NavItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {
  const {genreList} = useSelector(state=>state.MovieStore);
  return (
    <div className="movie-card"
    style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`+")"}} >
      <div className='overlay'>
        <div className='head'>
          <p>{item.title}</p>
          <hr></hr>
        </div>
        <div className='genre'>
          {item.genre_ids.map((id) => (<Badge className='Badge' bg="danger">{genreList.find((item) => item.id == id).name}</Badge>))}
        </div>
        <div className='score'>
          <span>평점 : {item.vote_average}</span><br/>
          <span>{item.adult ? '청소년 관람 불가' : 'All 관람 가능'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;