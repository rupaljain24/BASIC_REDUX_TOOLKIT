import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Feature/Cart/cartSlice'
import modalReducer from './Feature/Modal/modalSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer
        
    },
})
export default store;