import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { SearchListContext } from '../context/SearchListContext';

const MovieSearchCard = () => {
  const searchList = useContext(SearchListContext);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem('searchList');
    if (storedResults) {
      searchList.setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div style={{ display: 'flex', margin: '30px 30px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {searchList.searchResults && searchList.searchResults.map((item) => (
        <Card key={item.id} className='movieCard'>
          {item.poster_path ? (
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} style={{ marginBottom: '20px' }} />
          ) : (
            <Card.Img variant="top" src={'https://eumseongcci.korcham.net/images/no-image01.gif'} style={{ marginBottom: '125px' }} />
          )}
          <Card.Body style={{ color: '#eee' }}>
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