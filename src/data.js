import { isMobile } from "react-device-detect";
import product2 from "./assets/product2.svg";
import product from "./assets/product.svg";

export default [
  {
    id: 1,
    price: 50.0,
    amount: 0,
    amount2:1,
    amount3:10,
    id1:1,
    main_header: isMobile ? "8 Scent "  : "8-scent ",
    desc:"The 8-scent Evalution and Therapy kit will help you evaluate your odor identification ability with 8 distinct scents included in the package.",
    list:[],
    pics:['Mockup_revised8','Mockup_revised17'],
    path:{},
    img: product2
  },
  

   {
     id: 2,
     price: 95.0,
     amount: 0,
     amount2:1,
     amount3:0,
     id1:2,
     main_header: isMobile ? "16 Scent " : "16-scent ",
     desc:" The 16-scent Evalution and Therapy kit will help you evaluate the following abilities -",
     list:["1-Odor Identification","2-Odor Differentiation","3-Odor Intensity"," Package includes 16 scented tubes."],
     pics:['Mockup_revised9','Mockup_revised16'],
     path:{},
     img: product
   },
];






// const CartArray = JSON.parse(localStorage.getItem("newcart"));
// console.log(CartArray,"CartArray22222");
// export default [
  
//   {
//     id: 1,
//     price: 50.0,
//     amount: CartArray !== null &&  CartArray[0]?.amount > 0 ? CartArray[0]?.amount : 0,
//     amount2:1,
//     amount3:10,
//     id1:1,
//     main_header:"8-scent ",
//     desc:"The 8-scent Evalution and Therapy kit will help you evaluate your odor identification ability with 8 distinct scents included in the package.",
//     list:[],
//     pics:['Mockup_revised8','Mockup_revised17'],
//     path:{}
//   },
  

//    {
//      id: 2,
//      price: 95.0,
//      amount: CartArray !== null &&  CartArray[1]?.amount > 0 ? CartArray[1]?.amount : 0,
//      amount2:1,
//      amount3:0,
//      id1:2,
//      main_header:"16-scent ",
//      desc:" The 16-scent Evalution and Therapy kit will help you evaluate the following abilities -",
//      list:["1-Odor Identification","2-Odor Differentiation","3-Odor Intensity"," Package includes 16 scented tubes."],
//      pics:['Mockup_revised9','Mockup_revised16'],
//      path:{}
//    },
// ];
