import React, { useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import outline from "../assets/outline.svg";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect } from "react";


const EditProfile = () => {
  var socilaLogIn = localStorage.getItem("social_login_ID");
  const navigate = useNavigate()
  const location = useLocation();
  console.log("location", location);
  const UserID = localStorage.getItem("local_id_store")
  const userId = JSON.parse(UserID)
  console.log("UserID", UserID);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [ZipCode, setZipcode] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  useEffect(() => {
    const ProfileObj = location.state;
    setFirstName(ProfileObj.FirstName);
    setLastName(ProfileObj.LastName);
    setAddress(ProfileObj.Address);
    setZipcode(ProfileObj.ZipCode);
    setCity(ProfileObj.City);
    setState(ProfileObj.State);
  }, [])
  var obj = {}

  const [firstNameerror, setFirstNameerror] = useState("");
  const [lastNameerror, setLastNameerror] = useState("");
  const [addresserror, setAddresserror] = useState("");
  const [zipcodeerror, setZipcodeerror] = useState("");
  const [cityerror, setCityerror] = useState("");
  const [stateerror, setStateerror] = useState("");

  const [load, setLoad] = useState(false);

  function validate() {
    let firstNameerror = "";
    let lastNameerror = "";
    let addresserror = "";
    let zipcodeerror = "";
    let cityerror = "";
    let stateerror = "";


    ///VALIDATION CHECKS



    if (FirstName === "" || FirstName.length < 3 || FirstName.length > 30) {
      firstNameerror = "Invalid Firstname";
    }
    if (LastName === "" || LastName.length < 3 || LastName.length > 30) {
      lastNameerror = "Invalid Lastname";
    }
    if (Address === "" || Address.length < 3 || Address.length > 40) {
      addresserror = "Invalid Address";
    }
    if (ZipCode === "" || ZipCode.length !== 5 || isNaN(ZipCode)) {
      zipcodeerror = "Invalid Zipcode";
    }
    if (City === "" || City.length < 3 || City.length > 10) {
      cityerror = "Invalid City";
    }
    if (State === "" || State.length < 3 || State.length > 10) {
      stateerror = "Invalid State";
    }




    if (firstNameerror !== "" || lastNameerror !== "" || addresserror !== "" || zipcodeerror !== "" || cityerror !== "" || stateerror !== "") {
      setFirstNameerror(firstNameerror);
      setLastNameerror(lastNameerror);
      setAddresserror(addresserror);
      setZipcodeerror(zipcodeerror);
      setCityerror(cityerror);
      setStateerror(stateerror);

      return false;
    }

    //////////////////////////////////////////////////////////////////

    if (firstNameerror) {
      console.log("Name error", firstNameerror);
      setFirstNameerror(firstNameerror);
      return false;
    }

    if (lastNameerror) {
      console.log("Name error", lastNameerror);
      setLastNameerror(lastNameerror);
      return false;
    }

    if (addresserror) {
      console.log("Address error", addresserror);
      setAddresserror(addresserror);
      return false;
    }


    if (zipcodeerror) {
      console.log("Zip Code error", zipcodeerror);
      setZipcodeerror(zipcodeerror);
      return false;
    }

    if (cityerror) {
      console.log("City error", cityerror);
      setCityerror(cityerror);
      return false;
    }

    if (stateerror) {
      console.log("State error", stateerror);
      setStateerror(stateerror);
      return false;
    }

    return true;
  }



  function UpdateProfile(event) {
    event.preventDefault();

    const isValid = validate();
    console.log("isValid", validate());

    if (isValid) {
      setLoad(true);
      obj = {
        "Url": "/update-user-profile",
        UserProfile: {
          "Id": socilaLogIn ? parseInt(socilaLogIn) : userId,
          "FirstName": FirstName,
          "LastName": LastName,
          "Address": Address,
          "ZipCode": ZipCode,
          "City": City,
          "State": State,
        }
      }

      var stat;
      var api = 'https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/update-user-profile';
      console.log("obj", obj);
      axios.post(api, obj).then(res => {


        console.log("Axios Response: ", res.data);
        stat = res.data;


        console.log("stat", stat["StatusCode"]);
        if (stat["StatusCode"] === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `Logged In...`,
            showConfirmButton: false,
            timer: 3500,
          });

          setLoad(false);
        }
        else {

          Swal.fire({
            icon: 'warning',
            title: 'Invalid Credentials',
            text: "Invalid Details Added, Please Enter Again!",
            showCancelButton: false,
            confirmButtonText: 'Try Again!',
          });
          setLoad(false);
        }
      }).catch(e => {
        Swal.fire({
          icon: 'warning',
          title: 'Error!',
          text: e.Message,
          showCancelButton: false,
          confirmButtonText: 'Try Again!',
        })
        setLoad(false);
      }).finally(() => {
        setLoad(false);
      })

    }
  }





  return (
    <>
      <Wrapper>
        <div className='row container testing'>

          <section className='col-md-8 new' >
            {/* <Order_Review value={data}/> */}
            <div class="">
              <div class="">
                <div class="">
                  <div class="row yourcart">
                    <div class="col" style={{ position: 'relative', bottom: '10px' }}>
                      <img
                        src={outline}
                        class="arrowHide"
                        alt=""
                        onClick={(e) => { navigate('/userProfile') }}
                      />

                    </div>
                    <h3 style={{ position: 'relative', left: '200px', bottom: '40px' }}>Edit Profile</h3>
                  </div>
                  <div class="row">
                    <div class="col" style={{ position: 'relative', left: '-20px' }}>
                      <hr />
                    </div>
                  </div>
                  <div className="row-box">
                    <section class="shipping">

                      <form>

                        {/* <PaymentElement /> */}

                        <div class="col row-box">
                          <div class="row ">
                            <div class="col-lg-4 col-sm-12" >
                              <label for="fname" class="label-align">
                                First Name :
                              </label>
                            </div>


                            <div class="col-lg-6 col-sm-12">
                              {console.log(socilaLogIn,"socilaLogIn")}
                              <input
                                // disabled={socilaLogIn ? true : false}
                                type="text"
                                name="FirstName"
                                placeholder="First Name"
                                //    value={FirstName}  
                                defaultValue={location.state.FirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{firstNameerror}</div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-4 col-sm-12">
                              <label for="fname" class="label-align">
                                Last Name :
                              </label>
                            </div>


                            <div class="col-lg-6 col-sm-12">
                              <input
                                // disabled={socilaLogIn ? true : false}
                                type="text"
                                name="LastName"
                                placeholder="Last Name"
                                //    value={LastName} 
                                defaultValue={location.state.LastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />

                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{lastNameerror}</div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-4 col-sm-12">
                              <label for="Address" class="label-align">
                                Address :
                              </label>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <input
                                type="text"
                                name="Address"
                                placeholder="Address"
                                // value={Address}
                                defaultValue={location.state.Address}
                                onChange={(e) => setAddress(e.target.value)}
                              />

                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{addresserror}</div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-4">
                              <label for="zip-code" class="label-align">
                                Zip code :
                              </label>
                            </div>
                            <div class="col-6 width-mobile">
                              <input type="text" name="zip-code" placeholder="Zip Code"
                                //  value={ZipCode} 
                                defaultValue={location.state.ZipCode}
                                onChange={(e) => setZipcode(e.target.value)} />

                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{zipcodeerror}</div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <label for="city" class="label-align">
                                City :
                              </label>
                            </div>
                            <div class="col-6 width-mobile">
                              <input type="text" name="city" placeholder="City"
                                //  value={City}
                                defaultValue={location.state.City}
                                onChange={(e) => setCity(e.target.value)} />

                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{cityerror}</div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-4">
                              <label for="lname" class="label-align">
                                State :
                              </label>
                            </div>
                            <div class="col-6 width-mobile">
                              <input type="text" name="state" placeholder="State"
                                //  value={State} 
                                defaultValue={location.state.State}
                                onChange={(e) => setState(e.target.value)} />

                              <div style={{ color: 'red', fontsize: '12px', position: 'relative', left: '50px' }}>{stateerror}</div>
                            </div>
                          </div>

                          <div class="alignment-order">
                            <div class="col continue">

                              <button onClick={UpdateProfile} type="submit" value="Submit" className='LoginBtn'>
                                <a
                                  style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                                >
                                  Save
                                </a>
                              </button>
                              {load ? <h1 className={load ? 'loading-spinner' : 'LoginBtn'} disabled={load} style={{ color: 'blue', margin: "10px 0 170px 90px" }}></h1> : ''}
                            </div>
                          </div>
                          <br /><br /><br /><br /><br /><br />
                          <br /><br /><br /><br />




                        </div>
                      </form>
                    </section>
                  </div>
                  {/* <div class="alignment-order">
                       <div class="col1 continue1">
                    
                         <button onClick={SaveUser}>
                           <a
                             style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                               // onClick={}
                           >
                             Continue
                           </a>
                         </button>
                      
                       </div>
                     </div> */}
                </div>
              </div>
            </div>
          </section>

          <div class="col col-md-4 padding-0">
          </div>

        </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`

.arrowHide {
  // display: none;
  cursor: pointer;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container-fluid {
    width: 63%;
  }

  body{
    overflow:scroll;
  }

  .testing{
    margin-left:300px;
    margin-right:120px;
    align-items:row;
    padding-left:110px;
    padding-right:160px;
    padding-top:130px;
  }
  .row-box{
    position:relative;
    top:10px;
  }

  .continue1 {
    padding-top: 0px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width:30%;
  }

  .alignment-order {
    padding-bottom: 10px;
  }

  .btn {
    display: none !important;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .btn {
      display: block !important;
    }
    .cart .container-fluid {
      width: 85%;
    }
    .yourcart {
      padding-top: 20px;
      position: absolute;
      left: 100px;
    }
    .arrowHide {
      // display: none;
      cursor: pointer;
    }
    .width-mobile {
      width: 65%;
    }
  }
  
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  input[type="text"] {
    position: relative;
    left: 50px;
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0;
    display: inline-block;
    /* border: 1px solid #ccc; */
    border: none;
    box-sizing: border-box;
    background: #f3f3f3;
  }
  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .shipping p {
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    
  }
  .credit {
    background-color: #22669c;
    border: none;
    padding: 10px 20px;
    color: white;
  }
  .card-icon {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .continue {
    position: absolute;
    top: 510px;
    left: 122px;
      }
      .continue button {
        background-color: #22669c;
        border: none;
        padding: 10px 0px;
        color: white;
        width:220px;
      }

`


export default EditProfile;