import React,{useEffect} from "react";
import Mockup_16tube from "../assets/Mockup_16tube.svg";
import shop_arrow from "../assets/shop_arrow.svg";
import styled from "styled-components";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect';


const Olfaction = () => {
  const location = useLocation();

  

  const { name,total } = useGlobalContext(); 
  const navigate = useNavigate();
  const today = new Date();
  today.setDate(today.getDate()+6);

  const getDeliveryDate = () => {
    let date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
    return date;
  }
  const handleClickbtn = () => {
    // 👇️ navigate programmatically
    var obj = localStorage.getItem("userid-local_storage")
    console.log("Local Storage Check from navbar: ",obj);
    navigate('/');
  }
  return (
    <Wrapper>
      <section class="thankyou-section" id="shop">
        <div class="container-fluid p-0 ">
          <div>
            <div class="row ">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <span class="thanksheading">
                  Thank you!
                  <div className="hr-hide">
                  <hr></hr></div>
                  <br />
                  Your order has been placed successfully.
                </span>
              </div>
              <div class="row">
                <div class="col-lg-8 col-md-6 col-sm-12">
                  <p class="e-mail">
                    <br />
                    We have sent an email confirmation to your registered email
                    ID.
                  </p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 visitStore-hide">
                  <span>
                    <br />
                    <a onClick={handleClickbtn} style={{ color: "#22669C" }} className="Remove">
                      Visit the Sensify Store
                    </a>
                    &emsp;&emsp;
                    <img src={shop_arrow} onClick={handleClickbtn} className="Remove" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="thankyou-container">
        <div class="container-fluid">


{isMobile ? <div class="row thankyou">
               <div className="row">
            <div class="col-4">
              <img src={Mockup_16tube} class="imgSize" />
            </div>
            <div class="col-8" style={{position:'relative',left:'10px'}}>
              
                <h3>i-Sticks Scent Evaluation and Therapy kit</h3>
                <br/>
                <table>
                
                  <tr>
                    <th>Delivery by:</th>
                    <td style={{paddingLeft:'0px'}}>{getDeliveryDate()}</td>
                  </tr>
                </table>
                <br />
                </div>
                </div>
                <table class="hide-data">
                  <tr>
                    <th>Order number :</th>
                    <td style={{ paddingLeft: "60px" }}>{location.state.orderId}</td>
                  </tr>
                </table>
                <br class="hide-data" />
                <table class="hide-data">
                  <tr>
                    <th >Deliver to:</th><br/>
                    <td style={{ paddingLeft: "93px" }}>{location.state.name}</td>
                  </tr>
                </table>

                <table class="hide-data">
                  <tr>
                    <td style={{ paddingLeft: "170px" }}>
                     {location.state.address}
                    </td>
                  </tr>
                </table>
                
          <br/><br/><br/><br/>

                <div class="row">
              <div class="col-12 track">
                <button onClick={(e)=>{navigate('/yourOrders')}} >Track package</button>
              </div>
              <div className="col-12 continue-btn">
                <a
                onClick={handleClickbtn}
                  style={{
                    color: "#26649D",
                    textDecoration: "none",
                    marginLeft:"90px"
                  }}
                  // className="Remove"
                >
                  Continue shopping
                </a>
               
              </div>
            </div>
                
            <br />
                <br />
                <br />
            
          </div> 
          : 
          
          <div class="row thankyou">
            <div class="col-sm-12 col-md-4">
              <img src={Mockup_16tube} class="imgSize" />
            </div>
            <div class="col-sm-12 col-md-8">
              <div>
                <h3>i-Sticks Scent Evaluation and Therapy kit</h3>
                <div className="user-data">
                <table class="hide-data">
                  <tr>
                    <th>Order number :</th>
                    <td style={{ paddingLeft: "40px" }}>{location.state.orderId}</td>
                  </tr>
                </table>
                <br/><br/><br/>
                <table class="hide-data">
                  <tr>
                    <th style={{ width: "20%" }}>Deliver to:</th>
                    <td style={{ paddingLeft: "75px" }}>{location.state.name}</td>
                  </tr>
                </table>

                <table class="hide-data">
                  <tr>
                    <td style={{ paddingLeft: "150px" }}>
                     {location.state.address},
                     {/* {location.state.} */}
                    </td>
                  </tr>
                </table>
                <br class="hide-data" />
              
                </div>
                <table>
                
                  <tr>
                    <th>Delivery by :</th>
                    <td style={{ paddingLeft: "10px" }}>{getDeliveryDate()}</td>
                  </tr>
                </table>
                <br />
              </div>
            </div>
          
            <div class="row track">
              <div class="col-lg-3 track-button">
                <button onClick={(e)=>{navigate('/yourOrders')}} style={{padding:'40 px 10px 10px 10px'}}>Track package</button>
              </div>
              <div class="col-lg-3 pb">
                <a
                onClick={handleClickbtn}
                  style={{
                    color: "#26649D",
                    textDecoration: "none",
                    position:"relative",
                    top:'7px'

                  }}
                  className="Remove"
                >
                  Continue shopping
                </a>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          
          }

        

        </div>
      </section>
      <br/><br/><br/>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .thanksheading {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
    color: #4e4e4e;
  }
  .Remove:hover{
    cursor: pointer;
  }
  .test{
    padding: 50px 20px 20px 20px;
  }

  .e-mail {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .thankyou h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 20px;
    color: #4e4e4e;
  }
  .thankyou tr th {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .f {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .thankyou td {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .track{
    position:relative;
    left:320px
    // top:500px
  }
  .continue-btn{
    position:relative;
    left:90px
    top:50px
  }
  .track button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 40px;
    color: white;
  }
  .thankyou-container {
    padding-top: 70px;
  }
  .thankyou-section {
    padding-top: 150px;
  }
  .hide-data {
    display: block;
  }
  .address {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4e4e4e;
  }
  .d {
    display: none;
  }
  //   .track {
  //     padding-left: 325px;
  //   }
  @media Screen and (min-width: 320px) and (max-width: 767px) {

  .hr-hide{
    display:none;
  }
  .visitStore-hide{
    display:none;
  }
  .track{
    position:relative;
    left:70px
    // width:30px
    
  }
  .continue-btn{
    margin-top:15px
  }
  
    .container-fluid {
      width: 85%;
    }
    .d {
      display: block;
    }
    // .hide-data {
    //   position:relative:
    //   top:300px
    // }
    .imgSize {
      width: 92px;
      height: 92px;
    }
    .thanksheading {
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #4e4e4e;
    }
    .e-mail {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    }
    .thankyou h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding-bottom: 0px;
      color: #4e4e4e;
    }
    .track button {
      background-color: #22669c;
      border-radius: 8px;
      border: none;
      color: white;
    }
    
  }
`;

export default Olfaction;




