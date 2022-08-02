import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../utils/api"


const initialState =  {
  popular :{
    data : null,
    loading : false,
    error :""
  },
  genres:{
    data:null,
    loading:false,
    error:""
  },
  detail:{
    data:null,
    loading:false,
    error:""
  }
}


export const fetchPopuler = createAsyncThunk("fetchPopuler", async () =>{
  const response = await api().get("movie/popular?&language=tr");
  return response.data.results
})
export const fetchGenres = createAsyncThunk("fetchGenres",async () =>{
  const response = await api().get("genre/movie/list?&language=tr")
  return response.data.genres
})
export const fetchMovieDetail = createAsyncThunk("fetchMovieDetail",async(movieID)=>{
  const response = await api().get(`/movie/${movieID}?&language=tr`)
  return response.data
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers : (builder) =>{
    builder.addCase(fetchPopuler.pending,( state,action)=>{
      state.popular.loading = true
      state.popular.error =  ""
    })
    builder.addCase(fetchPopuler.fulfilled, (state,action)=>{
      state.popular.data = action.payload
      state.popular.loading = false
    })
    builder.addCase(fetchPopuler.rejected,(state,action)=>{
      state.popular.loading = false
      state.error = "Movieler alanımadı"

    })
    builder.addCase(fetchGenres.pending,( state,action)=>{
      state.genres.loading = true
      state.genres.error =  ""
    })
    builder.addCase(fetchGenres.fulfilled, (state,action)=>{
      state.genres.data = action.payload
      state.genres.loading = false
    })
    builder.addCase(fetchGenres.rejected,(state,action)=>{
      state.genres.loading = false
      state.genres.error = "Kategoriler alanımadı"

    })
    builder.addCase(fetchMovieDetail.pending,( state,action)=>{
      state.detail.loading = true
      state.detail.error =  ""
      state.detail.data = null
    })
    builder.addCase(fetchMovieDetail.fulfilled, (state,action)=>{
      state.detail.data = action.payload
      state.detail.loading = false
    })
    builder.addCase(fetchMovieDetail.rejected,(state,action)=>{
      state.detail.loading = false
      state.detail.error = "Kategoriler alanımadı"

    })
  }
})

// Action creators are generated for each case reducer function

export default moviesSlice.reducer
