import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


axios.baseURL = 'https://fakestoreapi.com/auth/login'

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader=()=>{
  axios.defaults.headers.common.Authorization = ``
}

export const register = createAsyncThunk(
  'auth/registr',
  async(credentials, thunkAPI) =>{
    try {
      const {data} =await axios.baseURL.post('/', credentials)
      // setAuthHeader(data.token)
      console.log (data)
      return data

    }catch (error) {
      return thunkAPI.rejectWithValue(error.massage)
    }
  }
)
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.baseURL.post('/login/login', credentials)
//       setAuthHeader(data.token)
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.massage)
//     }
//   }
// )

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.baseURL.post('/users/logout')
//     clearAuthHeader()
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.massage)
//   }
// })
 