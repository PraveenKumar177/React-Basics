import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(sessionStorage.getItem("cart")) || []
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const item = action.payload
            const existItem = state.cart.find(cartItem => cartItem.id === item.id)
            
            if (existItem) {               
               existItem.qty +=1
            } else {
                state.cart.push({...item,qty:1})
            }
            sessionStorage.setItem("cart",JSON.stringify(state.cart))
        },
        removeCart(state,action){
            const id = action.payload
            state.cart = state.cart.filter(item => item.id !== id)
            sessionStorage.setItem("cart",JSON.stringify(state.cart))
        },
        updateQty(state,action){
            const {id,qty} =  action.payload
            const index = state.cart.findIndex(item=>item.id === id)
            
            if (qty <= 0) {
                state.cart.splice(index,1)
            } else {
                state.cart[index].qty = qty
            } 
            sessionStorage.setItem("cart",JSON.stringify(state.cart))
        }

    }
})

export const {addToCart,removeCart,updateQty} = cartSlice.actions
export default cartSlice.reducer