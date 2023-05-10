import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies(){
  return async (dispatch) => {
    const popularMovieApi = api.get(`/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`);
    
    const topRatedApi = api.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`);

    const upcomingApi = api.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&api_key=${API_KEY}`);

    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedApi, upcomingApi]) //동시에 API 호출을 시키고 기다리라. //배열로 받음.
    dispatch({
      type:"GET_MOVIES_SUCCESS",
      payload:{
        popularMovies:popularMovies.data,
        topRatedMovies:topRatedMovies.data,
        upcomingMovies:upcomingMovies.data
      }
    })
  }
}
//미들웨어는 함수가 함수를 리턴 

export const movieAction = {
    getMovies
}