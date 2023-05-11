import React from 'react';
import { Badge, NavItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {
  const {genreList} = useSelector(state=>state.movie)
  return (
    <div className="movie-card"
    style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`+")"}}>
      <div className='overlay'>
        <div className='items'></div>
        <div className='items head'>
          <p>{item.title}</p>
          <hr></hr>
        </div>
        <div>{item.genre_ids.map((id) => (<Badge bg="danger">{genreList.find((item) => item.id == id).name}</Badge>))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? '청불' : '누구나'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;