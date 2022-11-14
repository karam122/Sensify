import React, { useState } from "react";
import Mockup_16tube from "../assets/Mockup_16tube.svg";
import outline from "../assets/outline.svg";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import Product_Cart from "./Product_Cart";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer.jsx";
import CheckoutNav from "./CheckoutNav";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import Noitem from "./Noitem";
import { isMobile } from "react-device-detect";
import ContinueBackBTN from "./Reuseable Components/ContinueBackButton";

const Olfaction = (props) => {
  const [load, setLoad] = useState(false);

  var socilaLogIn = localStorage.getItem("social_login_ID");
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, total, clearCart } = useGlobalContext();
  const PersistedTotal = localStorage.getItem("total");
  const PersistedSubTotal = localStorage.getItem("subtotal");
  const saleTax = localStorage.getItem("saleTax");
  const TotalItems = parseInt(localStorage.getItem("TotalAmount1"));

  let isok = false;
  if (TotalItems > 0) {
    console.log("Inside isok true");
    isok = true;
  } else {
    console.log("Inside isok false");
    isok = false;
  }

  var newobj = {};
  const { getpath } = useGlobalContext();
 

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/Shipping");
  };

  const handletest = () => {
    // 👇️ navigate programmatically
    //console.log();
    //navigate('/Payment');
  };

  const handleClickbtnadd = () => {
    // 👇️ navigate programmatically
    console.log("Inside Thank you");

    navigate("/Payment");
  };

  const handleClickbtn = () => {
    // 👇️ navigate programmatically
    //console.log("Hell",props.state.object);
    // setLoad(true);
    // var obj={}
    const obj = {
      Url: "/checkout",
      Order: {
        UserId: 1,
        ShippingToName: "",
        AddressLine1: "",
        AddressLine2: "",
        ZipCode: "",
        City: "",
        State: "",
        PhoneNumber: "",
        ShippingToEmail: "",
        ShippingFee: 10,
        SaleTax: parseFloat(saleTax),
        DeliveryType: "Online Payment",
        // OrderItemlist: [
        //   {
        //     ProductId: 2,
        //     Qty: 4,
        //     Price: 95,
        //   },
        //   {
        //     ProductId: 1,
        //     Qty: 4,
        //     Price: 50,
        //   },
        // ],
      },
    };

    var localid = localStorage.getItem("local_id_store");
    console.log("localid", localid);
    localid = parseInt(localid);
console.log(socilaLogIn,"socilaLogIn======");
    const tempCart = localStorage.getItem("tempCart");
    const PersistedCart = JSON.parse(tempCart);

    // console.log(PersistedCart.find((item) => item.amount !== 0), "PersistedCart");

    obj["Order"]["UserId"] = socilaLogIn ? parseInt(socilaLogIn) : localid ;
    obj["Order"]["ShippingToName"] = location.state.name;
    obj["Order"]["AddressLine1"] = location.state.address;
    obj["Order"]["AddressLine2"] = location.state.address2;
    obj["Order"]["ZipCode"] = location.state.zipcode;
    obj["Order"]["City"] = location.state.city;
    obj["Order"]["State"] = location.state.state;
    obj["Order"]["PhoneNumber"] = location.state.phone;
    obj["Order"]["ShippingToEmail"] = location.state.email;
    if(PersistedCart.find((item) => item.amount > 0 && item.id == 2 && item.amount > 0 && item.id == 1)) {
      
    }
    obj["Order"]["OrderItemList"] = [
        PersistedCart.find((item) => item.amount > 0 && item.id == 2) ? {
          ProductId: 2,
          Qty: PersistedCart.find((x) => x.id == 2).amount,
          Price: 95,
          
        } : {} ,
        PersistedCart.find((item) => item.amount > 0 && item.id == 1) ? {
          ProductId: 1,
          Qty: PersistedCart.find((x) => x.id == 1).amount,
          Price: 50,
        } : {}]
  
   

    
    console.log("Final Object :", obj);
    
    // obj?.Order.OrderItemList.forEach((item)=>{
    //   if(item.Qty > 0) {
    //     console.log(item); 
    //   }
    // })
    

    var api =
      "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/checkout";
    setLoad(true);
    Axios.post(api, obj).then((res) => {
      console.log("res", res);

      newobj = res.data;
      // console.log("res",newobj);
      // navigate('/Payment',{state:{id:localid,name:location.state.name,address:location.state.address,responses:res.data}});

      if (newobj["StatusCode"] === 200) {
        Swal.fire({
          icon: "success",
          title: "Order Reviewed!",
          text: "Press Continue to Pay!",
          showConfirmButton: true,
          timer: 3500,
        }); 
        setLoad(false);
        navigate("/Payment", {
          state: {
            id: localid,
            name: location.state.name,
            address: location.state.address,
            responses: res.data,
          },
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Invalid!",
          text: "Something wrong please try again!",
          showCancelButton: false,
          confirmButtonText: "Try Again!",
        });
        setLoad(false);
      }
    });

    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Order Reviewed!',
    //     text: "Press Continue to Pay!",
    //     showConfirmButton: true,
    //     timer: 3500,
    // });

    var message = newobj["Message"];
    console.log("newobj", newobj["Message"], "Messaeges", message);
    // setLoad(false);
  };

  if (isok) {
    return (
      <>
        <Wrapper>
          <CheckoutNav />

          <div className="row container testing">
            <section className="col-md-8">
              <section class="">
                <div class="">
                  <div class="">
                    <div class="">
                      <div class="row yourcart">
                        <div class="col">
                          <img
                            src={outline}
                            class="arrowHide"
                            alt="arrow"
                            style={{ position: "relative", left: "-25px",cursor:"pointer" }}
                            onClick={handleClick}
                          />
                          Review items
                        </div>
                      </div>
                      <div style={isMobile ? { width: 339 } : null} class="row">
                        <div class="col">
                          <hr />
                        </div>
                      </div>
                      <div class="row reviews-item">
                        <div class="col-lg-5">
                          <img
                            style={
                              isMobile ? { width: 320, height: 320 } : null
                            }
                            src={Mockup_16tube}
                            class="review-img"
                          />
                          {/* <img src="./img/Mockup_16tube 2.svg" class="review-img1" /> */}
                        </div>
                        <div class="col-lg-7">
                          <div>
                            <h3>i-Sticks Scent Evaluation and Therapy kit</h3>

                            <table>
                              <tr>
                                <th>{isMobile ? "Quantity :" : "Qty: "} </th>
                                <td
                                  style={
                                    isMobile
                                      ? { paddingLeft: 20 }
                                      : { width: "55%" }
                                  }
                                >
                                  {TotalItems}
                                </td>
                                <td
                                  onClick={() => navigate("/")}
                                  style={
                                    isMobile
                                      ? {
                                          paddingLeft: 70,
                                          color: "#26649D",
                                          fontWeight: "bold",
                                          cursor: "pointer",
                                        }
                                      : { width: "55%" }
                                  }
                                >
                                  <a href="#shop">Add Item</a>
                                </td>
                                <td style={!isMobile ? { width: "20%" } : null}>
                                  <a
                                    onClick={handleClickbtnadd}
                                    style={{ color: "#26649D" }}
                                    className="Remove"
                                  ></a>
                                </td>
                              </tr>
                            </table>
                            <br />
                            <table>
                              <tr>
                                <th>Price :</th>
                                <td
                                  style={
                                    isMobile
                                      ? { paddingLeft: 50 }
                                      : { width: "30%" }
                                  }
                                  class="dateStyle"
                                >
                                  ${PersistedTotal}
                                </td>
                              </tr>
                            </table>
                            <br />
                            <table>
                              <tr>
                                <th>Estimated delivery :</th>

                                <td
                                  style={
                                    isMobile
                                      ? { paddingLeft: 20, width: "44%" }
                                      : { width: "27%" }
                                  }
                                  class="dateStyle"
                                >
                                  7 Days
                                </td>
                              </tr>
                            </table>
                            <br />
                            <table class="hideremove">
                              <tr>
                                <th style={{ paddingTop: "25px" }}>
                                  <a
                                    onClick={clearCart}
                                    style={{ color: "#4E4E4E" }}
                                    className="Remove"
                                  >
                                    Remove Items
                                  </a>
                                </th>
                                {load ? (
                                  <h1
                                    className={
                                      load ? "loading-spinner" : "LoginBtn"
                                    }
                                    disabled={load}
                                    style={{
                                      position: "absolute",
                                      color: "blue",
                                      margin: "55px 0px 0px -70px",
                                    }}
                                  ></h1>
                                ) : (
                                  ""
                                )}
                              </tr>
                            </table>
                          </div>
                          {isMobile && (
                      
                            <ContinueBackBTN handleClickbtn={handleClickbtn} load={load} />
                            
                          )}
                          {!isMobile && (
                            <div class="address-hide">
                              <div
                                className="row"
                                style={isMobile ? null : { display: "flex" }}
                              >
                                <span style={{ fontWeight: "500" }}>
                                  Shipping details
                                </span>
                                {/* <img src={line_2} class="mb" /> */}
                                <hr
                                  style={
                                    isMobile
                                      ? { marginLeft: "20px" }
                                      : {
                                          marginLeft: "20px",
                                          width: "50%",
                                        }
                                  }
                                  class="mb"
                                />
                              </div>
                              <table>
                                <tr>
                                  <th>Ship to :</th>
                                  <td style={{ width: "10%" }}>
                                    <a href="#" style={{ color: "#26649D" }}>
                                      Edit
                                    </a>
                                  </td>
                                </tr>
                              </table>
                              <p class="address" style={{ paddingTop: "10px" }}>
                                {location.state.name}
                              </p>
                              <p class="address">{location.state.address}</p>
                              <p class="address">{location.state.phone}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <br></br>
              </section>
            </section>

            <div
              class={`${isMobile ? "mobile_review" : "col col-md-4 padding-0"}`}
            >
              <Product_Cart onClick={handleClickbtn} visibility={"visible"} />
              {isMobile && (
                <div class="address-hide">
                  <div
                    className="s"
                    style={isMobile ? { display: "flex" } : { display: "flex" }}
                  >
                    <span style={{ fontWeight: "500", textAlign: "center" }}>
                      Shipping details
                    </span>
                    {/* <img src={line_2} class="mb" /> */}
                    <hr
                      style={
                        isMobile
                          ? { marginLeft: "20px", width: "50%" }
                          : {
                              marginLeft: "20px",
                              width: "50%",
                            }
                      }
                      class="mb"
                    />
                  </div>
                  <table>
                    <tr>
                      <th>Ship to :</th>
                      <td style={{ width: "10%" }}>
                        <a href="/Shipping" style={{ color: "#26649D" }}>
                          Edit
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p class="address" style={{ paddingTop: "10px" }}>
                    {location.state.name}
                  </p>
                  <p class="address">{location.state.address}</p>
                  <p class="address">{location.state.phone}</p>
                </div>
              )}
            </div>
          </div>

          {/* <div class="alignment-order">
                <div class="col continue1">
                  <button onClick={handleClickbtn} style={{alignItems:'center'}}>
                    <a
                      style={{ textDecoration: "none", color: "white",alignItems:"center",padding:'10px 10px 10px 10px' }}
                    >
                      Continue
                    </a>
                  </button>
                  
                </div>
              </div> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
         
        </Wrapper>
        <Footer />
      </>
    );
  } else if (!isok) {
    return (
      <Wrapper>
        <Navbar />

        <div className="row container testing">
          <section className="col-md-8">
            <div class="col">
              <div class="row yourcart"></div>
            </div>
            <Noitem />
          </section>
        </div>

        <Footer />
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .container-fluid {
    ${isMobile ? `width: 100%` : `width: 63%`}
  }
  .continue-next button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */

    border: none;
    padding: 19px 0px;
    color: white;
    width:300px;
    position:absolute
    left:60px
  }
  .mobile_review {
    width: 116%;
    max-width: 116%;
  }
  .testing {
    ${
      isMobile
        ? `margin-left:1px;
    // margin-right:120px;
    // align-items:row;
    padding-left:1px;
    padding-right:78px;`
        : `margin-left:120px;
    margin-right:120px;
    align-items:row;
    padding-left:110px;
    padding-right:160px;`
    }// margin-left:120px;
    // margin-right:120px;
    // align-items:row;
    // padding-left:110px;
    // padding-right:160px;;;;;;;;;;
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  .alignment-order {
    padding-bottom: 10px;
  }
  .reviews-item {
    padding-top: 40px;
  }
  .reviews-item h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 40px;
    color: #4e4e4e;
  }
  .Remove:hover {
    cursor: pointer;
  }
  .reviews-item th {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.55);
  }
  .reviews-item a {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .dateStyle {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border: none;
    padding: 20px 50px;
    color: white;
  }
  .btn {
    display: none !important;
  }
  .address {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4e4e4e;
  }
  .address-hide {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .address-hide {
      display: block;
    }
    .btn {
      display: flex !important;
      position: fixed;
      left: 20%;
      bottom: -43px;
      transform: translate(-50%, -50%);
      margin: 0 auto;
      z-index: 1;
      border: none
    }
    .btn:hover {
      border-color: white;
    }

    .alignment-order {
      padding-bottom: 10px;
    }
    .cart .container-fluid {
      width: 85%;
    }
    .yourcart {
      padding-top: 20px;
    }
    .arrowHide {
      display: none;
    }
    .review-img {
      width: 296px;
      height: 296px;
    }
    .reviews-item h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      padding-bottom: 20px;
      padding-top: 15px;
      color: #4e4e4e;
    }
    .reviews-item {
      padding-top: 0px;
    }
    .hideremove {
      display: none;
    }
  }
  .continue1 {
    padding-top: 0px;
    padding-left: 300px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 10%;
  }

  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 100%;
    cursor: cursor;
  }
`;

export default Olfaction;
