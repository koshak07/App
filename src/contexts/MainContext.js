import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';

//хранилище создается с помощью хука createContext хранилище нужно обязательно экспортировать
export const mainContext = React.createContext()

const INIT_STATE = {
    products: null,
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        default: 
            return state
    }
}


//Отсюда идет провайдер
const MainContextProvider = (props) => {
    //userReducer это хук, который принимает в себе reducer и INIT_STATE Возвращает массив с состоянием(хранилище) и функцией (dispatch)
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    
    const getProducts = async () =>{
        try{
            const response = await axios(API)
            let action ={
                type: "GET_PRODUCTS",
                payload: response.data //данные, которые нужно добавить в хранилище
            }
            dispatch(action) // dispatch вызывает reducer
        }catch(e){
            console.log(e);
        }
    }

    const createProduct = async (product) =>{
        try{
           const response =  await axios.post(API, product)
           getProducts()
        }catch(e){
            console.log(e);
        }
    }

    const deleteProduct = async (id) => {
        try{
            const response = axios.delete(`${API}/${id}`)
            console.log(response);
            getProducts()
        }catch(e){
            console.log(e);
        }
    }

    return (
        <mainContext.Provider 
        value={{
            getProducts: getProducts,
            createProduct: createProduct,
            deleteProduct: deleteProduct,
            products: state.products,

        }}>
            {props.children}
        </mainContext.Provider>
    );
};

export default MainContextProvider;