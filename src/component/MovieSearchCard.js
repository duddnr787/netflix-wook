import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { SearchListContext } from '../context/SearchListContext';
import { Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const MovieSearchCard = () => {
  const searchList = useContext(SearchListContext);
  const location = useLocation();

  const search = location.state?.search || '';

  useEffect(() => {
    const storedResults = localStorage.getItem('searchList');
    if (storedResults) {
      searchList.setSearchResults(JSON.parse(storedResults));
    } else {
      searchList.setSearchResults([]);
    }
  }, []);

  return (
    <div>
      {searchList.searchResults.length !== 0 ? (
        <div className="search-info">
          <h2>"{search}" 의 검색 결과는 {searchList.searchResults.length} 건 입니다.</h2>
        </div>
      ) : (
        <Card className="noSearch" style={{ borderRadius: '20px' }}>
          <Card.Text>검색된 영화가 없습니다 ㅠ..ㅠ</Card.Text>
        </Card>
      )}
      <div style={{ display: 'flex', margin: '30px 30px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {searchList.searchResults.length !== 0 ? (
          searchList.searchResults.map((item) => (
            <Card key={item.id} className='movieCard'>
              {item.poster_path ? (
                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} style={{ marginBottom: '20px' }} />
              ) : (
                <Card.Img variant="top" src={'https://eumseongcci.korcham.net/images/no-image01.gif'} style={{ marginBottom: '125px' }} />
              )}
              <Card.Body style={{ color: '#eee' }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <strong>평점:</strong> {item.vote_average.toFixed(1)} 점
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
          ))
        ) : (
          <Card className="noSearch" style={{ borderRadius: '20px' }}>
            <Card.Text>검색된 영화가 없습니다 ㅠ..ㅠ</Card.Text>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MovieSearchCard;