import React, { createContext, useContext, useReducer } from "react";
import { shopItems } from "../data/shopItem";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const ADD_TO_CART = "ADD_TO_CART"
const ADD_QUANTITY = "ADD_QUANTITY"
const SUB_QUANTITY = "SUB_QUANTITY"
const CLEAR_CART = "CLEAR_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

// const shopItems = shopItems

const initialCart = {
    shopItems,
    cartItems: [],
    total: 0
}


const cartReducer = (state=initialCart, action) => {
    switch(action.type){

        case ADD_TO_CART:
            let itemToAdd = state.shopItems.find(item => item.id === action.payload)
            let existedItem = state.cartItems.find(item => action.payload === item.id)
            console.log(itemToAdd, action.payload, existedItem)
            if (existedItem){
                itemToAdd.quantity += 1
                return{
                    ...state,
                    total: state.total + itemToAdd.price
                }
            }else{
                itemToAdd.quantity = 1
                return{
                    ...state,
                    cartItems: [...state.cartItems, itemToAdd],
                    total: state.total + itemToAdd.price
                }
            }
        
        case ADD_QUANTITY:
            let itemToIncrementTotal = state.cartItems.find(item => item.id === action.payload)
            return{
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload ? 
                        {...item, quantity: item.quantity + 1} :
                        item
                ),
                total: state.total + itemToIncrementTotal.price
            }

        case SUB_QUANTITY:
            let itemToDecrementTotal = state.cartItems.find(item => item.id === action.payload)
            return{
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.quantity > 1 && item.id === action.payload ? 
                        {...item, quantity: item.quantity - 1} :
                        item
                ),
                total: itemToDecrementTotal.quantity > 1 ? state.total - itemToDecrementTotal.price : state.total
            }

        case REMOVE_FROM_CART:
            let itemToRemoveTotal = state.cartItems.find(item => item.id === action.payload)
            return{
                ...state,
                cartItems: state.cartItems.filter(item => 
                        item.id !== action.payload
                    ),
                total: state.cartItems.length > 0 ? state.total - (itemToRemoveTotal.price * itemToRemoveTotal.quantity) :
                        0
            }

        case CLEAR_CART:
            return{
                ...state,
                cartItems: [],
                total: 0
            }

        default:
            return state
    }}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCart);

const addToCart = (id) => {
dispatch({
        type: ADD_TO_CART,
        payload: id
    })
}

const addQuantity = (id) => {
    dispatch({
        type: ADD_QUANTITY,
        payload: id
    })
}

const subQuantity = (id) => {
    dispatch({
        type: SUB_QUANTITY,
        payload: id
    })
}

const removeFromCart = (id) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}

const clearCart = () => {
    dispatch({
        type: CLEAR_CART,
    })
}

    return (
        <CartContext.Provider value={{
            cartItems: state.cartItems,
            total: state.total,
            addToCart,
            addQuantity,
            subQuantity,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;