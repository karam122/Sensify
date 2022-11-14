import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import toast from "react-simple-toasts";

const ResearchForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const [nameerror, setNameerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [messageerror, setMessageerror] = useState("");
  // const [error, setError] = useState(false);


  
  function validate() {
    let nameerror = "";
    let emailerror = "";
    let messageerror = "";

    ///VALIDATION CHECKS

    if (email.includes("@") === false) {
      emailerror = "Email is not valid";
    }

    if (name === null || name=== "") {
      nameerror = "Name is required";
    }

    if (message === null || message=== "") {
      messageerror = "message is required";
    }


    if (nameerror !== "" || emailerror !== "" || messageerror!== "") {
      setNameerror(nameerror)
      setEmailerror(emailerror);
      setMessageerror(messageerror);
      return false;
    }

    //////////////////////////////////////////////////////////////////

    if (emailerror) {
      console.log("Email error", emailerror);
      setEmailerror(emailerror);
      return false;
    }

    if (nameerror) {
      console.log("Name error", nameerror);
      setNameerror(nameerror);
      return false;
    }

    if (messageerror) {
      console.log("Message error", messageerror);
      setMessageerror(messageerror);
      return false;
    }

    return true;
  }



  const feedBackValidationHandler = (e, value) => {

    console.log(value, e.target.value, "value");
    if (value === "name") {
      setName(e.target.value);
    } else if (value === "email") {
      setEmail(e.target.value);
    } else if (value === "occupation") {
      setOccupation(e.target.value);
    } else setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      setLoad(true);
    const obj = {
      Url: "/set-mission",
      Mission: {
        Name: name,
        Email: email,
        Profession: occupation,
        Message: message,
      },
    };
    const url =
      "https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/set-mission";
    await axios
      .post(url, obj)
      .then((res) => res.data.IsSuccess && setLoad(false),setNameerror(''), setTimeout(()=> {window.location.reload()},1000) , setEmailerror(''), setMessageerror(''), toast('Data Successfully added', {render: message => <div style={{ backgroundColor:'green',color:"white",padding:'15px',textAlign:'center',borderRadius:'40px',width:'300px' }}>{message}</div>})
      .catch((err) => toast("Something Went Wrong!", 3000)))
      
  }
  };
  // const handleSubmit = (e) => {
  //   handleApiRequest();
  //   // e.preventDefault();
  //   // console.log("Submit", error);
  //   // setName("");
  //   // setEmail("");
  //   // setOccupation("");
  //   // setMessage("");
  // };
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-2 left-contain-div"></div>
          <div className="col-8">
            <div className="row pt-5 ">
              <div className="col-6">
                <p className="title">
                  Collaborate
                  <br />
                  with us.
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-xs-12 col-sm-6">
                <p className="description">
                  Our mission is to find a better way for early screening of
                  patients with Alzheimer's, Parkinson's and other
                  neurodegenerative diseases.
                  <br />
                  <br />
                  <br />
                  We are open for collaboration with researchers in the
                  industry, academia and the government. Take your research to
                  the next level with SensifyAware and accomplish your research
                  objectives.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <form action='' method='post' className="ps-xl-5 ms-xl-5  ps-sm-5 ms-sm-5 form-container">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Your name :
                    </label>
                    <input
                      
                      onChange={(e) => feedBackValidationHandler(e, "name")}
                      // value={name}
                      required
                      type="text"
                      class="form-control p-2 bg-white border"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name='name'
                    />
                    <div style={{position:'relative',color:'red'}} >{nameerror}</div>
                    {/* {!name && (
                      <p style={{ color: "red" }}>Please enter Your Name</p>
                    )} */}
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Email eddress :
                    </label>
                    <input
                      required="required"
                      onChange={(e) => feedBackValidationHandler(e, "email")}
                      value={email}
                      type="email"
                      name="email"
                      class="form-control p-2"
                      id="exampleInputPassword1"
                    />
                     <div style={{position:'relative',color:'red'}} >{emailerror}</div>
                    {/* {error && (
                      <p style={{ color: "red" }}>
                        Please enter valid email address
                      </p>
                    )} */}
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      What do you do?
                    </label>
                    <input
                      onChange={(e) =>
                        feedBackValidationHandler(e, "occupation")
                      }
                      value={occupation}
                      type="text"
                      class="form-control p-2 bg-white border"
                      id="exampleInputEmail1"
                      name='occupation'
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message :
                    </label>
                    <textarea
                    required
                      onChange={(e) => feedBackValidationHandler(e, "message")}
                      value={message}
                      class="form-control"
                      name='message'
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                     <div style={{position:'relative',color:'red'}} >{messageerror}</div>
                    {/* {!message && (
                      <p style={{ color: "red" }}>please enter Your Message</p>
                    )} */}
                  </div>
                  <button
                    onClick={(e)=>{handleSubmit(e)}}
                    type="submit"
                    class="btn mb-5 mt-2 btn-order"
                    // disabled={!name || !email || !message ? true : false}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-2 right-container-div"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0px;
    padding: 0px;
  }
  .title {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;

    color: #4e4e4e;
  }

  .description {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #4e4e4e;
  }
  .btn-order {
    background-color: #22669c;
    width: 100px;
    font-size: normal;
    color: white;
    border: 1px solid #22669c;
    border-radius: 8px;
    padding: 8px;
    float: right;
  }

  @media Screen and (min-width: 320px) and (max-width: 480px) {
    * {
      margin: 0px;
      padding: 0px;
    }
    .left-container-div {
      display: none;
    }
    .right-container-div {
      display: none;
    }
    .form-container {
      padding-top: 0%;
    }
    .title {
      position: relative;
      top: -50px;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #4e4e4e;
    }
    .description {
      position: relative;
      top: -62px;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;

      color: #4e4e4e;
    }
    .btn-order {
      background-color: #22669c;
      position: relative;
      width: 150px;
      font-size: normal;
      color: white;
      border: 1px solid #22669c;
      border-radius: 8px;
      padding: 6%;
      left: 50px;
      float: left;
    }
  }
`;

export default ResearchForm;
