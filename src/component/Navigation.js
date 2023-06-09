import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { SearchListContext } from '../context/SearchListContext';
import MovieSearchCard from './MovieSearchCard';

const Navigation = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchList = useContext(SearchListContext);
  const { isLoggedIn, setIsLoggedIn, email, setEmail } = useContext(AuthContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search
        }
      });
      if (response.data.results.length !== 0) {
        searchList.setSearchResults(response.data.results);
        localStorage.setItem('searchList', JSON.stringify(response.data.results));
        setSearch('');
        navigate('/movies/search', { state: { search: search } });
      } else {
        if (localStorage.getItem('searchList') !== null) {
          localStorage.removeItem('searchList');
        }
        navigate('/movies/search');
      }
    } catch (error) {
      console.log('error');
    }
  }
  //새로고침 시 상태 변경 방지.
  useEffect(() => {
    // 컴포넌트 마운트 시 로그인 상태 확인
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  const handleLogin = () => {
    // 로그인 요청을 보내는 코드 작성
    fetch('/login', {
      method: 'POST',
      // 필요한 요청 헤더, 바디 등 설정
    })
      .then(response => {
        // 응답 처리
        navigate('/movies/search');
      })
      .catch(error => {
        // 에러 처리
      });
  };

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
            <Form className="d-flex" onSubmit={handleSearch}>
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
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('email');
    localStorage.removeItem('searchList');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Button variant="outline-danger" onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </Button>
      ) : (
        <Button onClick={handleLogin} variant="outline-danger" style={{ marginLeft: "10px" }}>
          Login
        </Button>
      )}
    </React.Fragment>
  );
}
export default Navigation;