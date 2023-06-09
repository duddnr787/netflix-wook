import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './component/Navigation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignSuccess from './pages/SignSuccess';
import { useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { SearchListContext } from './context/SearchListContext';
import MovieSearchCard from './component/MovieSearchCard';
import { movieAction } from './redux/actions/movieAction';
import { useDispatch } from 'react-redux';
//1. 3개 페이지 필요 홈페이지 , movie 페이지 , movieDetail페이지 

//2. 홈페이지 : 배너를 볼 수 있다.
//3. 홈페이지 : 3가지 색션의 영화를 볼 수 있다. (popular, top rated, upcoming)
//4. 홈페이지 : 각 영화의 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부 알 수 있다.
//5. 홈페이지 : 영화를 슬라이드로 넘기면서 다른 영화를 볼 수 있다.

//6. 영화 디테일 페이지: 영화에 대한 디테일한 정보를 볼 수 있다. ( 포스터, 제목, 줄거리, 점수, 인기도, 청불 여부 등등)
//7. 예고편 버튼을 누르면 예고편을 볼 수 있다. 
//8. 영화의 리뷰도 볼 수 있다.
//9. 관련된 영화도 볼 수 있다.
//10. 영화 검색을 할 수 있다.
//11. 영화 정렬도 할 수 있다. 필터링 할 수 있다.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  // 로그인 정보를 제공할 컨텍스트 값 설정
  const authContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
  };
  // 검색 영화 컨텍스트 값 
  const SearchListValue = {
    searchResults,
    setSearchResults
  };
  
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      <SearchListContext.Provider value={SearchListValue}>
        <div className='App'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/search' element={<MovieSearchCard />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/login' element={isLoggedIn ? <Home /> : <Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signupSuccess' element={<SignSuccess />} />
          </Routes>
        </div>
      </SearchListContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
