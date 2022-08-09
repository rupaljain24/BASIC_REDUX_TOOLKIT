import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems.js'

const initialState={
    cart:cartItems,
    total:0,
    amount:4,
    loading:true
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cart=[]
        },
        removeItem:(state,action)=>{
           const newList=state.cart.filter((elements)=>elements.id !==action.payload)
            state.cart=newList;
        },
        increase:(state,action)=>{
            const cart=state.cart.find((elem)=>{ return elem.id == action.payload})
            cart.amount=cart.amount+1
        },
        decrease:(state,action)=>{
            const cart=state.cart.find((elem)=>{ return elem.id == action.payload})
            if(cart.amount<=1){
                const newList=state.cart.filter((elements)=>elements.id !==action.payload)
                state.cart=newList;
            }
            else{
                cart.amount=cart.amount-1
            }
            
        }
    }
})

export const {clearCart,removeItem,increase,decrease} =cartSlice.actions;
console.log(cartSlice);
export default cartSlice.reducer;