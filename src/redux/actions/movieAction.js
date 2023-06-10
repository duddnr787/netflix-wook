import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" })
      const popularMovieApi = api.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);

      const topRatedApi = api.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);

      const upcomingApi = api.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`);

      const genreApi = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`);


      let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upcomingApi, genreApi]) //동시에 API 호출을 시키고 기다리라. //배열로 받음.
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres
        }
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILED" })
    }
  }
};
//미들웨어는 함수가 함수를 리턴 

export const movieAction = {
  getMovies
}