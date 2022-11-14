import React, { useContext, useReducer, useEffect } from "react";
import Checkout from "../data";
import itemData from "../data";
import reducer from "../reducers/reducer";


const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: Checkout,
  itemData:itemData,
  total: 0,
  amount: 0,
  amount2:0,
  amount3:0,
  //path:{},
  cartItems: [],
  
};



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(initialState.amount, "initialState.amount");

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
   
  };



  const getpath = (path,id) => {
    dispatch({ type: "GET_PATH", payload: {path,id} });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const increasei = (id1) => {
    dispatch({ type: "INCREASEI", payload: id1 });
  };
  const decreased = (id1) => {
    dispatch({ type: "DECREASED", payload: id1 });
  };

  const toggleAmount = (id, type) => {
   // console.log("Heloooo",id, type);
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id,type } });
  };

  const increase2 = (id, val) => {
    // console.log("Heloooo",id, type);
     dispatch({ type: "TOGGLE_AMOUNT", payload: { id,val } });
   };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        cartItems: state.cartItems,
        addToCart,
        clearCart,
        remove,
        increase,
        decrease,
        increasei,
        decreased,
        //getdata,
        increase2,
        getpath,
        toggleAmount,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };



// import React, { useContext, useReducer, useEffect,useState } from "react";
// import Checkout from "../data";
// import ItemData from "../itemData";
// import reducer from "../reducers/reducer";


// const AppContext = React.createContext();
// const CartArray = JSON.parse(localStorage.getItem("newcart"));
// const initialState = {
//   loading: false,
//   cart: Checkout,
//   itemData: ItemData,
//   total: 0,
//   amount: 0,
//   amount2:0,
//   amount3:0,
//   //path:{},
//   cartItems: [],
  
// };



// console.log(reducer.action,"reducer");
// localStorage.setItem("Persist_Cart", JSON.stringify(initialState.cart));
// // localStorage.setItem("Amount", JSON.stringify(amount));
// const AppProvider = ({ children }) => {
//   // cart: [{id, count},{id, count}]
//   const [state, dispatch] = useReducer(reducer, initialState);
  

//   const addToCart = (item,count) => {
//     dispatch({ type: "ADD_TO_CART", payload: {item,count} });
//     console.log('count',count)
//   };



//   const getpath = (path,id) => {
//     dispatch({ type: "GET_PATH", payload: {path,id} });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };
//   const remove = (id) => {
//     dispatch({ type: "REMOVE", payload: id });
//   };
//   const increase = (id,count) => {
//     console.log("INCREASE",count)
//     dispatch({ type: "INCREASE", payload: id,count });
    
//   };
//   const decrease = (id,count) => {
//     console.log("DECREASE",count)
//     dispatch({ type: "DECREASE", payload: id,count });
//   };

//   const increasei = (id1,count) => {
//     dispatch({ type: "INCREASEI", payload: id1 });
//     // console.log("id1",count+1);
//   };
//   const decreased = (id1) => {
//     dispatch({ type: "DECREASED", payload: id1 });
//   };

//   const toggleAmount = (id, type) => {
//     dispatch({ type: "TOGGLE_AMOUNT", payload: { id,type } });
//     console.log("TOGGLE_AMOUNT",id, type);
//   };

//   const increase2 = (id, val) => {
//     dispatch({ type: "TOGGLE_AMOUNT", payload: { id,val } });
//     // console.log("Heloooo",id, type);
//     console.log("TOGGLE_AMOUNT2",id);
//    };

//   useEffect(() => {
//     dispatch({ type: "GET_TOTALS" });
//   }, [state.cart]);

//   useEffect(() => {
//     console.log(initialState,"initialState");
//     localStorage.setItem('initialState', JSON.stringify(initialState));
//   }, []);

//   return (
//     <AppContext.Provider
//       value={{
//         ...state,
//         cartItems: state.cartItems,
//         addToCart,
//         clearCart,
//         remove,
//         increase,
//         decrease,
//         increasei,
//         decreased,
//         //getdata,
//         increase2,
//         getpath,
//         toggleAmount,
        
//       }}
//     >
//       {/* {console.log(value ,"cartItems")} */}
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
