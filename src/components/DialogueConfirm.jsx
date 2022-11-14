import React, { useState } from 'react'
import styled from 'styled-components'
import Hero_blue from '../assets/Hero_blue.svg'
import resetPasswordLink from '../assets/resetPasswordLink.svg';
import pattern1 from '../assets/Pattern1.svg';
import pattern2 from '../assets/pattern2.svg';
import { useNavigate, useLocation } from 'react-router-dom'
import Axios from 'axios';
import Swal from 'sweetalert2';
import outline from "../assets/outline.svg";
import { isMobile } from 'react-device-detect';
// import Confirmation from './Login Pages/Confirmation'
// import Navbar from './Navbar'


function DialogueConfirm() {
  const [Number, setNumber] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();



  function handleClickSignIn() {
    setLoad(true);
    var stat;
    var obj = {
      "EmailAddress": "xaidi.zaidi.ali@gmail.com",
      "Url": "/confirmsignup",
      "UserId": 5,
      "ConfirmationCode": "881932"
    }

    obj["ConfirmationCode"] = Number;
    var newuserid = parseInt(location.state.userid);
    obj["EmailAddress"] = location.state.email;
    obj["UserId"] = newuserid;

    console.log("obj", obj);

    var api = 'https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/confirm-user'
    setLoad(true);
    Axios.post(api, obj).then(res => {
      console.log("Axios Response Confirmation: ", res.data);
      stat = res.data;
      console.log("stat", stat["StatusCode"]);
      if (stat["StatusCode"] === 0) {
        Swal.fire({
          icon: 'success',
          title: 'Confirmed!',
          text: `${location.state.email} has been Confirmed.`,
          showConfirmButton: false,
          timer: 3500,
        });
        var useridval = stat.Data.UserId;
        console.log("userid", useridval);
        setLoad(false);
        navigate('/Signin');
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Confirmation Failed',
          text: "Invalid Code, Please Enter Again!",
          showCancelButton: false,
          confirmButtonText: 'Try Again!',
        });
        setLoad(false);
      }


    })



    //navigate('/Signup');
  }

  const Clickback = () => {
    navigate('/Signup');

  }
  return (
    <Wrapper>


      {/* <div class="background-img">
        <div class="containercheck">
        <Confirmation />
        </div>
        </div> */}

      <div className="card">
        <div className="row">
          <div className="col left-container">
            <section className='col-md-6 new'>
              <img src={resetPasswordLink} alt="Cart_icon" className='img-here' />
            </section>

            <section className='col-md-6 new'>
              <img src={pattern2} alt="Cart_icon" className='img-Pattern2' />
            </section>
          </div>
          <div className="col">
            <div className="row">
              <div class="col yourcart">
                <img
                  src={outline}
                  class="arrowHide"
                  alt=""
                  onClick={Clickback}
                  style={{ position: "relative", left: '-5px' }}
                />
                Enter Confirmation Code
              </div>
            </div>
            <div className="discription">
              We have sent a email confirmation code you your email,
              Enter the code below and begin your sensify experience today!
            </div>
            <div class="row">

              <div>
                <label for="Code" class="label-align">
                  Code:
                </label>
              </div>
              <div class="row1">
                <input
                  type="number"
                  name="Code"
                  placeholder=""
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}

                /></div>

            </div>



            <div class="alignment-order">
              <div class="col continue">
                <button onClick={handleClickSignIn} type="submit" value="Submit">
                  <a
                    style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                  >
                    Next
                  </a>
                </button>
                {isMobile ? <div>
                {load ? <h1 className={load ? 'loading-spinner' : 'LoginBtn'} disabled={load} style={{ color: 'blue', margin: "10px 0 150px 55px" }}></h1> : ''}
                </div>
                :
                <div>
                {load ? <h1 className={load ? 'loading-spinner' : 'LoginBtn'} disabled={load} style={{ color: 'blue', margin: "10px 0 150px 90px" }}></h1> : ''}
                </div>
                }
                
              </div>
            </div>

            <section className='col-md-6 new'>
              <img src={pattern1} alt="Cart_icon" className='img-Pattern1' />
            </section>


          </div>

        </div>
      </div>


    </Wrapper>
  )
}

const Wrapper = styled.div`

.card {
  position: absolute;
width: 968px;
height: 580px;
left: 284px;
top: 151px;

background: #FFFFFF;
box-shadow: 0px 4px 32px 16px rgba(30, 30, 30, 0.25);
border-radius: 8px;
}

.yourcart {
  position:relative;
  left:25px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  
}
.discription {
  position: absolute;
  width: 296px;
  height: 64px;
  left: 530px;
  top: 150px;
  
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  
  color: #4E4E4E;
  
}

.alignment-order {
  
  position: absolute;
width: 220px;
height: 48px;
left: 580px;
top: 380px;

filter: drop-shadow(0px 16px 24px rgba(38, 100, 157, 0.3));
}
.continue {
  margin-top: 10px;
  margin-left:20px;
}
.continue button {
  background-color: #22669c;
  /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
  
  border: none;
  padding: 10px 0px;
  color: white;
  width:100%;
}

.img-here {
  position: absolute;
width: 360px;
height: 300px;
left: 100px;
top: 200px;
}

.img-Pattern2 {
  position: absolute;
width: 165px;
height: 150px;
left: 2px;
top: 450px;

mix-blend-mode: normal;
border-radius: 8px 0px 0px 8px;
transform: rotate(0deg)
}

.img-Pattern1 {
  position: absolute;
width: 480px;
height: 148px;
left: 470px;
top: 424px;

mix-blend-mode: normal;
opacity: 0.5;
border-radius: 8px 0px 0px 8px;
transform: matrix(1, 0, 0, 1, 0, 0);
}

input[type="number"] {
  box-sizing: border-box;
//    position: absolute;
  width: 328px;
  height: 48px;
  left: 730px;
  top: 385px;
  background: #FFFFFF;
  border: 1px solid #26649D;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom:15px;
  padding-left:20px;
  margin-left:34px
}

.label-align {
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin-left: 34px;
  margin-top:160px
}

}


@media Screen and (min-width: 320px) and (max-width: 480px) {

  .left-container{
      display:none
  }
  
  .card {
      // position: absolute;
  width: 0px;
  height: 0px;
  left: 0px;
  max-width:200px
  top: 140px;
  }
  .new{
      display:none
  }

  .yourcart {
    position:fixed;
    left:20px; 
  }
  .discription {
    position: absolute;
    width: 296px;
    height: 64px;
    left: 30px;
    top: 120px;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    
    color: #4E4E4E;
    
}

  input[type="number"] {
      box-sizing: border-box;
  //    position: absolute;
      width: 320px;
      height: 48px;
      left: 30px;
      top: 385px;
      background: #FFFFFF;
      border: 1px solid #26649D;
      border-radius: 8px;
      margin-top: 10px;
      margin-bottom:15px;
      padding-left:20px;
      margin-left:34px
    }
  
    .label-align {
      font-family: Work Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      margin-left: 34px;
      margin-top:200px
    }

    .alignment-order {
  
      position: absolute;
  width: 306px;
  height: 48px;
  left: 90px;
  top: 320px;
  
  filter: drop-shadow(0px 16px 24px rgba(38, 100, 157, 0.3));
    }
    .continue {
      margin-top: 10px;
      // margin-left:50px;
    }

    .continue button {
      background-color: #22669c;
      /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
      
      border: none;
      padding: 10px 0px;
      color: white;
      width:50%;
    }  

}





// .new{
//    padding-top:0px;
//    margin-top:120px;
//    margin-bottom:100px;
//    align-items:center;
//    margin_left:100px;
//    overflow: hidden;
// }

// .container-fluid {
//     width: 66%;
//     overflow: hidden;
//   }
//   .background-img {
//     background-image: url(${Hero_blue});
//     background-size: cover;
//     background-position: top;
//     height: 100vh;
//   }
//     .containercheck {
        
//         margin-left: 180px;
//         margin-right: 350px;
//         width: 1200px;
//         height: auto;
//         //display: flex;
//         //flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         border-radius: 10px;
//         overflow: hidden;


//     }


`

export default DialogueConfirm