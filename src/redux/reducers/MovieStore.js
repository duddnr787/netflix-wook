import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies:{},
  topRatedMovies:{},
  upcomingMovies:{},
  loading : true,
  genreList:[]
};
const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    movieReq : (state, action) => {
      state.loading = action.payload;
    },
    reqfailed: (state, action) => {
      state.loading = action.payload;
    },
    updateMovieStore: (state, action) => {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upcomingMovies = action.payload.upcomingMovies;
      state.genreList = action.payload.genreList;
    },
  },
});

export const { updateMovieStore, movieReq, reqfailed }  = MovieSlice.actions;
export default MovieSlice.reducer;


// toolkit