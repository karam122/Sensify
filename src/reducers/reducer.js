
const tempCart = localStorage.getItem('tempCart');
console.log(tempCart,'tempCart')
var PersistedCart = JSON.parse(tempCart);
// localStorage.setItem("PersistedCart",JSON.stringify( PersistedCart))
 


const reducer = (state, action) => {

  const setTotalItemCount = (tempCart) => {
    console.log('inside set total');
    var totalZero = 0;
    var totalAmount = 0;
    var subTotal = 0;
    var saleTax = 0;
    tempCart.map((cartItem) => {
      console.log(cartItem.id,'DECREASE map');
       totalZero +=cartItem.amount;
       totalAmount +=(cartItem.price*cartItem.amount);
       subTotal +=(cartItem.price*cartItem.amount);
     });

     localStorage.setItem("subtotal", subTotal);

     console.log(tempCart,'totaln cart');
     // shipping and tax
     console.log(totalAmount,'totaln net');
     if(totalAmount !== 0){
      
      saleTax = totalAmount * 0.1;
      localStorage.setItem("saleTax", saleTax);
      var extra = saleTax + 10
      console.log(extra,'totaln extra');
      totalAmount += extra;
     }

     console.log(totalAmount,'totaln grand');

     localStorage.setItem("TotalAmount1", totalZero);
     localStorage.setItem("total", totalAmount);

    console.log( localStorage.getItem("TotalAmount1"),'DECREASE map');
  } 

  const clearCart = () => {
    PersistedCart = JSON.parse(localStorage.getItem('tempCart'));
    PersistedCart.map((cartItem) => { 
       cartItem.amount = 0;
     });
     localStorage.setItem('tempCart',JSON.stringify(PersistedCart));
     setTotalItemCount(PersistedCart)

    console.log( localStorage.getItem("TotalAmount1"),'DECREASE map');
  } 

  if (action.type === "ADD_TO_CART") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) 
      {
        return { ...cartItem, amount: cartItem.amount2};
      }
      return cartItem;
    });
    console.log(tempCart,'tempcart')
    localStorage.setItem('tempCart',JSON.stringify(tempCart));
    PersistedCart = JSON.parse(localStorage.getItem('tempCart'));

    setTotalItemCount(tempCart);
    return { ...state, cart: tempCart };
  }

  
  if (action.type === "CLEAR_CART") {
    clearCart()
  //  const PersistedCart =JSON.parse(localStorage.getItem('PersistedCart'))
    return { ...state, cart: PersistedCart };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    console.log('increase');
    let tempCart = PersistedCart && PersistedCart.map((cartItem) => {
      if (cartItem.id === action.payload) 
      {
        console.log("inside increase", cartItem.id, cartItem.amount);
        //cartItem.amount=cartItem.amount+1;
        //console.log("Afterrrr increase", cartItem.amount);
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      console.log("outside increase Cartitem", cartItem);
      return cartItem;
    });
    localStorage.setItem('tempCart',JSON.stringify(tempCart));
     PersistedCart = JSON.parse(localStorage.getItem('tempCart'));

     setTotalItemCount(tempCart);

    return { ...state, cart: tempCart };
  }


  if (action.type === "DECREASE") {
    console.log('DECREASE');

    

    let tempCart = PersistedCart && PersistedCart
      .map((cartItem) => { 
 
 
        if (cartItem.id === action.payload) { 
            
            return { ...cartItem, amount: cartItem.amount >= 1 ? cartItem.amount - 1 : cartItem.amount };
          
        }
        return cartItem;
      }) 

      console.log(tempCart,'tempcart2222')
      localStorage.setItem('tempCart',JSON.stringify(tempCart));
      PersistedCart = JSON.parse(localStorage.getItem('tempCart'));
 
      setTotalItemCount(tempCart);
     
    return  { ...state, cart: tempCart };
  }



  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        console.log(state.cart,"GET_TOTALS");
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0 ,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "GET_DATA") {
    //let{object}=state.object;
    state.object=action.payload;
    return null ;
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "name") {
    return { ...state, cart: action.payload, name: 'name' };
  }

  // if (action.type === "GET_PATH") {
  //   console.log("inside get path", action.payload.path);
  //   let tempCart = state.cart
  //     .map((cartItem) => { 

  //       if (cartItem.id === 1) { 
  //         console.log("hello inside it", cartItem.id);
  //         cartItem.path=action.payload.path;
  //           return { ...cartItem };
          
  //       }
  //       console.log("hello OUTSIDE it", cartItem.path);
  //       return cartItem;
  //     })
  //     .filter((cartItem) => cartItem.id !== -1);
  //   return { ...state, cart: tempCart };
  // }

  // if (action.type === "GET_PATH") {
  //   let { path, amount } = state.cart.reduce(
  //     (totalpath, cartItem) => {
  //       const { path } = cartItem;
        
  //       totalpath.path = action.payload;
  //       return totalpath;
  //     },
  //     {
  //       path: {},
  //       amount: 0,
  //     }
  //   );
    
  //   return { ...state, path };
  // }


  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        console.log("outside toggle Cartitem", cartItem);
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  //////////////////////////////////////////////////////////
  if (action.type === "INCREASEI") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id1 === action.payload) 
      {
        console.log("inside increasei", cartItem.id1, cartItem.amount2);
        //cartItem.amount=cartItem.amount+1;
        //console.log("Afterrrr increase", cartItem.amount);
        return { ...cartItem, amount2: cartItem.amount2 + 1 };
      }
      console.log("outside increase Cartitemiii", cartItem);
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }



  if (action.type === "DECREASED") {
    let tempCart = state.cart
      .map((cartItem) => { 

        if (cartItem.id1 === action.payload) { 
          // if (cartItem.amount2===0)
          // {
          //   console.log("Inside decreased");
          //   return { ...cartItem, amount2: cartItem.amount2 === 0 ? cartItem.amount2 : cartItem.amount2 };
          
          // }

         if(cartItem.amount2>1){
            return { ...cartItem, amount2: cartItem.amount2 > 1 ? cartItem.amount2 - 1 : cartItem.amount2 };
          } 
        }
        console.log("outside decreased Cartitem", cartItem);
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount2 !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "INCREASE2") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          
            return { ...cartItem, amount3: cartItem.amount3 + 1 };
          
        }
        console.log("outside toggle Cartitem", cartItem);
        return cartItem;
      })
      .filter((cartItem) => cartItem.id === 1);
    return { ...state, cart: tempCart };
  }



  throw new Error("no matching action type");


};

export default reducer;




// const reducer = (state, action) => {
//  console.log("state",state);
// //  localStorage.setItem("Persist_State", JSON.stringify(state));
//  if (action.type === "ADD_TO_CART") {
//     let tempCart = state.cart.map((cartItem) => {
//       if (cartItem.id === action.payload.item)
//       // alert("Item already added to cart"); 
//       {
//         console.log(action.payload,"add_to_cartr");
//         return { ...cartItem, amount: cartItem.amount2 };
//       }
      
//       console.log(action.payload,"add_to_cart");
//       localStorage.setItem("count",action.payload.count);
//       return cartItem;
//     });
    
//     //save on local storage
//     console.log(state.cart,'state.cart');
//     console.log("stateend",tempCart);
//     localStorage.setItem("newcart", JSON.stringify(tempCart));  
//     return { ...state, cart:tempCart };
    
//   }
  
//   if (action.type === "CLEAR_CART") {
//     return { ...state, cart: [] };
//   }
//   if (action.type === "REMOVE") {
//     return {
//       ...state,
//       cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
//     };
//   }
//   if (action.type === "INCREASE") {
//     // alert("increase");
//     let tempCart = state.cart.map((cartItem) => {
//       if (cartItem.id === action.payload) 
//       {
//         localStorage.setItem("count",cartItem.amount + 1);
//         console.log("inside increase", cartItem.id, cartItem.amount);
//         //cartItem.amount=cartItem.amount+1;
//         //console.log("Afterrrr increase", cartItem.amount);
//         return { ...cartItem, amount: cartItem.amount + 1 };
        
//       }
//       console.log("outside increase Cartitem", cartItem);
//       return cartItem;
//     });
//     return { ...state, cart: tempCart };
//   }



//   if (action.type === "DECREASE") {
//     // alert("decrease");
//     let tempCart = state.cart
//       .map((cartItem) => { 

//         if (cartItem.id === action.payload) { 
//             if(cartItem.amount===1 || cartItem.amount===0)
//             {
//               cartItem.amount=-1;
//               // localStorage.setItem("count",-1);
//             }
//             localStorage.setItem("count", cartItem.amount > 1 ? cartItem.amount - 1 : 0);
//             return { ...cartItem, amount: cartItem.amount > 1 ? cartItem.amount - 1 : cartItem.amount };
          
//         }
//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.amount !== -1);
//     return { ...state, cart: tempCart };
//   }



//   if (action.type === "GET_TOTALS") {
//     let { total, amount } = state.cart.reduce(
//       (cartTotal, cartItem) => {
//         const { price, amount } = cartItem;
//         const itemTotal = price * amount;

//         cartTotal.total += itemTotal;
//         cartTotal.amount += amount;
//         return cartTotal;
//       },
//       {
//         total: 0,
//         amount: 0,
//       }
//     );
//     total = parseFloat(total.toFixed(2));

//     return { ...state, total, amount };
//   }
//   if (action.type === "LOADING") {
//     return { ...state, loading: true };
//   }

//   if (action.type === "GET_DATA") {
//     //let{object}=state.object;
//     state.object=action.payload;
//     return null ;
//   }

//   if (action.type === "DISPLAY_ITEMS") {
//     return { ...state, cart: action.payload, loading: false };
//   }

//   if (action.type === "name") {
//     return { ...state, cart: action.payload, name: 'name' };
//   }

//   // if (action.type === "GET_PATH") {
//   //   console.log("inside get path", action.payload.path);
//   //   let tempCart = state.cart
//   //     .map((cartItem) => { 

//   //       if (cartItem.id === 1) { 
//   //         console.log("hello inside it", cartItem.id);
//   //         cartItem.path=action.payload.path;
//   //           return { ...cartItem };
          
//   //       }
//   //       console.log("hello OUTSIDE it", cartItem.path);
//   //       return cartItem;
//   //     })
//   //     .filter((cartItem) => cartItem.id !== -1);
//   //   return { ...state, cart: tempCart };
//   // }

//   // if (action.type === "GET_PATH") {
//   //   let { path, amount } = state.cart.reduce(
//   //     (totalpath, cartItem) => {
//   //       const { path } = cartItem;
        
//   //       totalpath.path = action.payload;
//   //       return totalpath;
//   //     },
//   //     {
//   //       path: {},
//   //       amount: 0,
//   //     }
//   //   );
    
//   //   return { ...state, path };
//   // }


//   if (action.type === "TOGGLE_AMOUNT") {
//     let tempCart = state.cart
//       .map((cartItem) => {
//         if (cartItem.id === action.payload.id) {
//           if (action.payload.type === "inc") {
//             return { ...cartItem, amount: cartItem.amount + 1 };
//           }
//           if (action.payload.type === "dec") {
//             return { ...cartItem, amount: cartItem.amount - 1 };
//           }
//         }
//         console.log("outside toggle Cartitem", cartItem);
//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.amount !== 0);
//     return { ...state, cart: tempCart };
//   }

//   //////////////////////////////////////////////////////////
//   if (action.type === "INCREASEI") {
    
//     let tempCart = state.itemData.map((cartItem) => {
//       if (cartItem.id1 === action.payload) 
//       {
//         console.log("inside increasei", cartItem.id1, cartItem.amount2);
//         //cartItem.amount=cartItem.amount+1;
//         console.log("Afterrrr increase", cartItem.amount2);
//         return { ...cartItem, amount2: cartItem.amount2 + 1 };
//       }
//       console.log("outside increase Cartitemiii", cartItem);
//       return cartItem;
//     });

//     console.log(tempCart,"tempCart");
//     return { ...state, itemData: tempCart };
//   }



//   if (action.type === "DECREASED") {
//     let tempCart = state.itemData
//       .map((cartItem) => { 

//         if (cartItem.id1 === action.payload) { 
//           // if (cartItem.amount2===0)
//           // {
//           //   console.log("Inside decreased");
//           //   return { ...cartItem, amount2: cartItem.amount2 === 0 ? cartItem.amount2 : cartItem.amount2 };
          
//           // }

//          if(cartItem.amount2>1){
//             return { ...cartItem, amount2: cartItem.amount2 > 1 ? cartItem.amount2 - 1 : cartItem.amount2 };
//           } 
//         }
//         console.log("outside decreased Cartitem", cartItem);
//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.amount2 !== 0);
//     return { ...state, itemData: tempCart };
//   }

//   if (action.type === "INCREASE2") {
//     let tempCart = state.cart
//       .map((cartItem) => {
//         if (cartItem.id === action.payload.id) {
          
//             return { ...cartItem, amount3: cartItem.amount3 + 1 };
          
//         }
//         console.log("outside toggle Cartitem", cartItem);
//         return cartItem;
//       })
//       .filter((cartItem) => cartItem.id === 1);
//     return { ...state, cart: tempCart };
//   }



//   throw new Error("no matching action type");


// };

// export default reducer;
