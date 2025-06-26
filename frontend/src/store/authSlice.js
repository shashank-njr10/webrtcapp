import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
  otp: {
    phone: '',
    hash: '',
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const {user} = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
    setOtp: (state, action) => {
      const {phone , hash} = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer