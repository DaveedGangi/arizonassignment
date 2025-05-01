import React from "react";

const CartContext=React.createContext({
    cartList:[],
    addItemToCart:()=>{},
    removeItemToCart:()=>{},
    incrementCartQuantity:()=>{},
    decrementCartQuantity:()=>{},
    removeAllItems:()=>{}

})

export default CartContext;