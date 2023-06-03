import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { SearchListContext } from '../context/SearchListContext';

const MovieSearchCard = () => {
  const searchList = useContext(SearchListContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {searchList.searchResults && searchList.searchResults.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '0.5rem' }}>
          <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <strong>평점:</strong> {item.vote_average}
            </Card.Text>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {item.genre_ids.map((id) => (
                <Badge key={id} className="me-1 mb-1" bg="danger">
                  {id}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieSearchCard;