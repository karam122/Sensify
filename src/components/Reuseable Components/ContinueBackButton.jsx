import React from "react";
import { useNavigate } from "react-router";
import outline from "../../assets/outline.svg";
// import ContinueBackButton from "./ContinueBackButton.css";
function ContinueBackBTN(props) {
  console.log("ContinueBackBTN", props);
  const navigate = useNavigate();
  
  const handleContinueNext = (e, props) => {
    if (props.getData) {
      e.preventDefault();
      return props.getData();
    } else if (props.SaveUser) {
      e.preventDefault();
      return props.SaveUser();
    } else e.preventDefault();
    return props.handleClickbtn();
  };
  return (
    <div className="row">
      <div class="btn">
        <div
          className="col-7"
          style={{
            textAlign: "center",
            left: "40px",
            position: "relative",
            top: "0px",
            backgroundColor: "white",
          }}
          onClick={() => navigate(-1)}
        >
          <span style={{ position: "absolute", top: "18px" }}>
            <img src={outline} alt="" onClick={() => navigate(-1)} />
            Back
          </span>
        </div>
        <div className="col-6">
          <span class="continue-next">
            <button onClick={(e) => handleContinueNext(e, props)}>
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              > Continue
                {props.load ? (
                                  <h1
                                    className={
                                     props.load ? "loading-spinner" : "LoginBtn"
                                    }
                                    disabled={props.load}
                                    style={{
                                      position: "absolute",
                                      color: "blue",
                                      margin: "-25px 0px 0px 80px",
                                    }}
                                  ></h1>
                                ) : (
                                  ""
                                )}
              </a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContinueBackBTN;
