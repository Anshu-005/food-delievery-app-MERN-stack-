import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext()

const reducer = (state, action)=>{
    switch(action.type){
            case "ADD":
            return [...state,{id: action.id, name:action.name, qty:action.qty, size: action.size, price: action.price,  img:action.img}]

            case "Remove":
                let newArr = [...state]
                newArr.splice(action.index,1)
                return newArr;

           case "UPDATE":
            let arr = [...state];
            arr.forEach((food, index) => {
                if (food.id === action.id) {
                arr[index] = {
                    ...food,
                    qty: parseInt(food.qty) + parseInt(action.qty),
                    price: food.price + action.price
                };
                }
              });
              return arr;

            case "DROP":
                let emptArray = [];
                return emptArray;        

            default:
                console.log('Error in Reducer');
                
    }
}

export const CartProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,[])

    return (
      <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
      </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
