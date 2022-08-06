import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../utils/api"

const initialState ={
    detail:{
        data:null,
        loading:true,
        error:"",
    },
    cast:{
        data:null,
        loading:true,
        error:"",
    }
}

export const fetchPersonDetail = createAsyncThunk("fetchPersonDetail",async(personId)=>{
    const response = await api().get(`/person/${personId}?language=tr-TR`)
    return response.data
  })
export const fetchCast = createAsyncThunk("fetchCast", async(personId)=>{
    const response =[]
    const movie = await api().get(`/person/${personId}/movie_credits?language=tr-TR`)
    const tv = await api().get(`/person/${personId}/tv_credits?language=tr-TR`)
    response.push(...movie.data.cast)
    response.push(...tv.data.cast)
    return response
} )

export const personSlice = createSlice({
    name:"person",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPersonDetail.pending,(state,action)=>{
            state.detail.data = null
            state.detail.loading = true
        })
        builder.addCase(fetchPersonDetail.fulfilled,(state,action)=>{
            state.detail.data=action.payload
            state.detail.loading=false
        })
        builder.addCase(fetchPersonDetail.rejected,(state,action)=>{
            state.detail.loading=false
            state.detail.error = "Detaylar alınamadı."
        })
        builder.addCase(fetchCast.pending,(state,action)=>{
            state.cast.data = null
            state.cast.loading=true
        })
        builder.addCase(fetchCast.fulfilled,(state,action)=>{
            state.cast.data=action.payload
            state.cast.loading=false
        })
        builder.addCase(fetchCast.rejected,(state,action)=>{
            state.cast.loading=false
            state.cast.error = "Detaylar alınamadı."
        })
    }
})

export default personSlice.reducer
