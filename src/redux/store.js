import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import loadingReducer from './loadingSlice'
import loginReducer from './loginSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    isLoading: loadingReducer,
    isLogin: loginReducer,
  },
})