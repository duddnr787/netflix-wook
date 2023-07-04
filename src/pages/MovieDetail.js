import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState([]);
  const { loading } = useSelector(state => state.MovieStore);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('아 이 주소 아니랑께');
        }
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  if (loading) {
    return <ClipLoader color="#eee" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" style={{ margin: '0 auto' }} />
  }

  return (
    <Container style={{ marginTop: '3vh' }}>
      <Card style={{ background: 'linear-gradient(135deg, #1e0439, #5d0404)', padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} style={{ width: '300px', height: '450px' }} />
        <Card.Body style={{ color: '#fff' }}>
          <Card.Title style={{fontSize:'5em'}}>{movie.title}</Card.Title>
          <Card.Text>
            {movie.overview}
          </Card.Text>
          <Card.Text>
            평점: {movie.vote_average}
          </Card.Text>
          {/* 추가적인 영화 세부 정보를 표시할 수 있습니다. */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetail;