import { combineReducers } from 'redux';
import movieReducer from './movieReducer'


export default combineReducers({
  movie:movieReducer
});//컴바인 리듀서 안에는 항상 객체가 들어간다.