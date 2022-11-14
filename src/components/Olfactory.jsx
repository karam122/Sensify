import React from "react";
import styled from "styled-components";
import Group from "../assets/Group.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Ellipse2 from "../assets/Ellipse2.svg";
import mission from "../assets/mission.jpg";
import new_missions from "../assets/new_missions.png";
// import ScriptTag from "react-script-tag";
// import $ from "jquery";

const Olfactory = () => {
  let options = {
    startAngle: 1.5,
    size: 80,
    value: 0.6,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle .bar").circleProgress(options).on("circle-animation-progress");

  let options1 = {
    startAngle: 1.5,
    size: 80,
    value: 0.9,
    thickness: 10,
    fill: { gradient: ["#fff"] },
  };
  // $(".circle1 .bar1").circleProgress(options1).on("circle-animation-progress");
  return (
    <Wrapper>
      <section class="mission-section" id="mission">
        <div class="mission-img">
          <div class="container-fluid p-0 ">
            <div class="mission-content">
              <div class="row ">
                <div class="col"></div>
                <div class="col-lg-7 col-md-8 col-sm-6">
                  <p class="mission-header">
                    The brain processes <br />
                    sensory inputs while
                    <br />
                    co-ordinating core body functions
                  </p>
                  <p class="col-lg-12 col-md-12 col-sm-12 mission-des">
                    It is a long established fact that a reader will be <br />
                    distracted by the readable content of a page when <br />
                    looking at its layout. The point of using Lorem Ipsum <br />
                    is that it has a more-or-less normal distribution of <br />
                    letters, as opposed to using 'Content here, content <br />
                    here', making it look like readable English. <br />
                  </p>
                </div>
                {/* <div class="col-lg-6 col-md-6 col-sm-12 mission-side-content">
                  <p class="mobile-padding">
                    <b> 13 million people in America</b> experience anosmia, a
                    partial or complete loss of smell.
                  </p>

                  <img src={Group} />
                  <p style={{ paddingTop: "45px" }}>
                    Approximately<b> 1 in 8 Americans</b> over age 40 has
                    measurable smell dysfunction.
                  </p>

                  <div
                    class="d-flex"
                    style={{ paddingTop: "50px", paddingBottom: "50px" }}
                  >
                    <span>
                      <div class="wrapper">
                        <div class="circle">
                          <div class="bar"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "50px" }}>
                      <img src={Ellipse1} />
                    </span>
                    <p>
                      Over 50% of subjects between 65-80 years of age suffer
                      from anosmia.
                    </p>
                  </div>
                  <div class="d-flex">
                    <span>
                      <div class="wrapper">
                        <div class="circle1">
                          <div class="bar1"></div>
                        </div>
                      </div>
                    </span>
                    <span style={{ paddingRight: "30px" }}>
                      <img src={Ellipse2} alt="" />
                    </span>
                    <p>
                      80% of subjects above 80 years of age suffer from anosmia.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .mission-img {
    background-image: url(${new_missions});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 70vw;
    margin-top: -7vw;
  }
  .mission-content .mission-header {
    margin: 70px 0px 0px 40px;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    // letter-spacing: 0em;
    color: var(--font-color-for-content);
    // padding-top: 235px;
    color: white;
  }
  .mission-content {
    padding-top: 80px;
  }

  .mission-des {
    margin: 0px 0px 0px 40px;
    font-weight: 300;
    font-size: var(--font-size-16px);
    line-height: 19px;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 100px;
  }
  .mission-side-content p {
    font-weight: 300;
    font-size: var(--font-size-16px);
    line-height: 19px;
    color: #fff;
  }
  .mission-side-content {
    padding-left: 30px;
  }
  .mission-des b {
    font-weight: 600;
  }
  @media screen and (min-width: 1100px)  {
    .mission-content .mission-header {
      margin: 170px 0px 0px 80px;
    }
    .mission-des {
      margin: 0px 0px 0px 80px;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 900px)  {
    .mission-content .mission-header {
      margin: 0px 0px 0px 80px;
      font-size: 28px;
      font-weight: 400;
      line-height: 30px;
    }
    .mission-des {
      margin: 0px 0px 0px 80px;
      // margin: 0px 0px 0px 80px;
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .mission-content .mission-header {
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      color: #fff;
      margin: 0px 0px 10px 0px;
    }
    .mission-img {
      /* background-position: right; */
      background-position: right 25% bottom 50%;
    }
    b {
      font-weight: 600;
    }
    .mobile-padding {
      padding-top: 40px;
    }
    .mission-section .container-fluid {
      width: 85%;
    }
    .mission-content {
      padding-top: 72px;
    }
    .mission-des {
      // display: none;
      // margin-bottom:20px;
      margin: -40px 10px 0px 0px;
    }
    .mission-content p {
      font-weight: var(--font-weight-300);
      font-size: var(--font-size-14px);
      line-height: 16px;
    }
    .mission-side-content {
      padding-bottom: 60px;
    }
  }
`;

export default Olfactory;
