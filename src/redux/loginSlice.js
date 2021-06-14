
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'isLogin',
    initialState : false,
    reducers : {
        setLogin(state,action) {
            const { logged } = action.payload
            return logged;
        }
    }
})
export const {setLogin} = loginSlice.actions
export default loginSlice.reducer