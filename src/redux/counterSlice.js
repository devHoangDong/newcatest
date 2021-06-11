import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
            {
              id: 99,
              img: 'http://test.newca.vn/img/uploads/fca.jpg',
              name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
              price: '800.000',
              number: 0,
              soluong : 0,
              total  : 0,
            },
            {
              id: 95,
              img: 'http://test.newca.vn/img/uploads/fca.jpg',
              name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
              price: '800.000',
              number: 0,
              soluong : 0,
              total  : 0,
            },
            {
              id: 91,
              img: 'http://test.newca.vn/img/uploads/fca.jpg',
              name: 'Chữ ký số FastCA cho tổ chức gói 3 năm',
              price: '800.000',
              number: 0,
              soluong : 0,
              total  : 0,
            }
          ],
    reducers: {
        addCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
            state[index].number += 1
            } else {
                const newData = {
                    ...action.payload,
                    number:1,
                }
                state.push(newData)
            }
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addCart } = cartSlice.actions
  
  export default cartSlice.reducer