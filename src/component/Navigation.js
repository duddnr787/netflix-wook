import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import MovieSearchCard from './MovieSearchCard';

const Navigation = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search
        }
      });
      console.log(response.data.results);
      if (response.data.results.length !== 0) {
        setSearchResults(response.data.results); //context로 바꿔야하나봐... 
        setSearch('');
      } else {
        alert('검색 내용이 없습니다 ! ');
      }
    } catch (error) {
      console.log('error');
    }
  }
  // 조건부 렌더링 
  const isMoviesPage = window.location.pathname === '/movies';

  return (
    <Navbar bg="black" variant="dark" expand="lg" className='Nav'>
      <Container fluid>
        <Navbar.Brand href="/"><span id='logo'>WOOKFLIX</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/movies" className='nav-item'>Movies</Link>
          </Nav>
          {isMoviesPage && (
            <Form className="d-flex">
              <Form.Control
                style={{ backgroundColor: 'rgba(60, 60, 60, 0.5)', color: 'white', width: '180px', height: '33.5px' }}
                type="text"
                placeholder="영화를 입력해주세요."
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-danger" onClick={handleSearch}>Search</Button>
            </Form>
          )}
          <AuthButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const AuthButton = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Button variant="outline-danger" onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </Button>
      ) : (
        <Button href="/login" variant="outline-danger" style={{ marginLeft: "10px" }}>
          Login
        </Button>
      )}
    </React.Fragment>
  );
}
export default Navigation;