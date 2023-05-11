import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../component/SideBar';

const Movies = () => {
  return (
    <div className='movie-container'>
      <div className='movie-sidebar-wrapper'>
        <Container>
          <Row>
            <Col lg={4}>
              <SideBar></SideBar>
            </Col>
            <Col >
              {/* <MovieList></MovieList> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Movies;