import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../utils/api"





export const fetchPopuler = createAsyncThunk("fetchPopuler", async () =>{
  const response = await api().get("movie/popular");
  return response.data.results
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [{"name":"Stranger Things","country":"USA","date":"2016 - Current","imdb":"86/100","img":"st.jpg","Category":["Action","Adventure","Horror"]},
    {"name":"Batman Begins","country":"USA","date":"2005","imdb":"82/100","img":"batman.jpg","Category":["Action","Adventure"]},
    {"name":"Spider-Man : Into The Spider Verse","country":"USA","date":"2018","imdb":"86/100","img":"spiderman.jpg","Category":["Action","Adventure","Animation"]},
    {"name":"Dunkirk","country":"USA","date":"2017","imdb":"86/100","img":"dunkirk.jpg","Category":["Action","Drama","History"]},
    {"name":"Spider-Man : Into The Spider Verse","country":"USA","date":"2018","imdb":"86/100","img":"spiderman.jpg","Category":["Action","Adventure","Animation"]},
    ],
    popular :{
      data : null,
      loading : false,
      error :""
    }
  },
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
      state.populer.loading = false
      state.error = "Movieler alanımadı"

    })
  }
})

// Action creators are generated for each case reducer function

export default moviesSlice.reducer
