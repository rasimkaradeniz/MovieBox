import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../utils/api"


const initialState =  {
  popular :{
    data : null,
    loading : false,
    error :""
  },
  populartv :{
    data : null,
    loading : false,
    error :""
  },
  genres:{
    data:null,
    loading:false,
    error:""
  },
  genrestv:{
    data:null,
    loading:false,
    error:""
  },
  detail:{
    data:null,
    loading:false,
    error:"",
    cast:null
  },search:{
    data:[],
    loading:false,
    error:""
  }
}


export const fetchPopuler = createAsyncThunk("fetchPopuler", async () =>{
  const response = await api().get("movie/popular?&language=tr");
  return response.data.results
})
export const fetchPopulerTv = createAsyncThunk("fetchPopulerTv", async () =>{
  const response = await api().get("tv/popular?&language=tr");
  return response.data.results
})
export const fetchGenres = createAsyncThunk("fetchGenres",async () =>{
  const response = await api().get("genre/movie/list?&language=tr")
  return response.data.genres
})
export const fetchTvGenres = createAsyncThunk("fetchTvGenres",async () =>{
  const response = await api().get("genre/tv/list?&language=tr")
  return response.data.genres
})
export const fetchMovieDetail = createAsyncThunk("fetchMovieDetail",async(movieID)=>{
  const returnArray = []
  const response = await api().get(`/movie/${movieID}?&language=tr`)
  const cast = await api().get(`/movie/${movieID}/credits?`)
  returnArray.push(response.data)
  returnArray.push(cast.data.cast)
  return returnArray
})
export const fetchTvDetail = createAsyncThunk("fetchTvDetail",async(tvID)=>{
  const returnArray = []
  const response = await api().get(`/tv/${tvID}?&language=tr`)
  const cast = await api().get(`/tv/${tvID}/credits`)
  returnArray.push(response.data)
  returnArray.push(cast.data.cast)
  return returnArray
})


export const searchMovie = createAsyncThunk("searchMovie",async(query)=>{
  const response =await api().get(`/search/multi?page=1&query=${query}`)
  return response.data.results
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
    builder.addCase(fetchPopulerTv.pending,( state,action)=>{
      state.populartv.loading = true
      state.populartv.error =  ""
    })
    builder.addCase(fetchPopulerTv.fulfilled, (state,action)=>{
      state.populartv.data = action.payload
      state.populartv.loading = false
    })
    builder.addCase(fetchPopulerTv.rejected,(state,action)=>{
      state.populartv.loading = false
      state.populartv.error = "Movieler alanımadı"

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
    builder.addCase(fetchTvGenres.pending,( state,action)=>{
      state.genrestv.loading = true
      state.genrestv.error =  ""
    })
    builder.addCase(fetchTvGenres.fulfilled, (state,action)=>{
      state.genrestv.data = action.payload
      state.genrestv.loading = false
    })
    builder.addCase(fetchTvGenres.rejected,(state,action)=>{
      state.genrestv.loading = false
      state.genrestv.error = "Kategoriler alanımadı"

    })
    builder.addCase(fetchMovieDetail.pending,( state,action)=>{
      state.detail.loading = true
      state.detail.error =  ""
      state.detail.data = null
      state.detail.cast=null
    })
    builder.addCase(fetchMovieDetail.fulfilled, (state,action)=>{
      state.detail.data = action.payload[0]
      state.detail.cast = action.payload[1]
      state.detail.loading = false
    })
    builder.addCase(fetchMovieDetail.rejected,(state,action)=>{
      state.detail.loading = false
      state.detail.error = "Kategoriler alanımadı"

    })
    builder.addCase(fetchTvDetail.pending,( state,action)=>{
      state.detail.loading = true
      state.detail.error =  ""
      state.detail.data = null
      state.detail.cast=null
    })
    builder.addCase(fetchTvDetail.fulfilled, (state,action)=>{
      state.detail.data = action.payload[0]
      state.detail.cast = action.payload[1]
      state.detail.loading = false
    })
    builder.addCase(fetchTvDetail.rejected,(state,action)=>{
      state.detail.loading = false
      state.detail.error = "Kategoriler alanımadı"

    })
    builder.addCase(searchMovie.pending,( state,action)=>{
      state.search.data=[]
      state.search.loading = true
      state.search.error =  ""
    })
    builder.addCase(searchMovie.fulfilled, (state,action)=>{
      state.search.data = action.payload
      state.search.loading = false
    })
    builder.addCase(searchMovie.rejected,(state,action)=>{
      state.search.loading = false
      state.search.error = "Kategoriler alanımadı"

    })
  }
})

// Action creators are generated for each case reducer function

export default moviesSlice.reducer
