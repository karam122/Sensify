import React from "react";
import styled from "styled-components";
import new_hero_img from "../assets/new_hero_img.png";
import Navbar from "./Navbar.jsx";
import Get_app from '../assets/Get_app.svg'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <section class="home-section" id="home">
        <div class="background-img">
          {/* <Navbar /> */}
          <div class="home-page-text">
            <div class="container-fluid p-0">
              <div class="col">
                <p class="home-heading">
                  Discover the wonder that is
                  <br />
                  your brain with
                  <br />
                  SensifyAware.
                </p>
                <p class="home-text">
                  With the SensifyAware app, you can evaluate your senses and
                  cognition
                  <br />
                  <span>and stay on top of your cognitive health.</span>
                </p>
                <button onClick={(e) => {}} class="home-button ripple1">
                  <a class="nav-link" aria-current="page" href="#about" style={{textColor: "#26649D"}}>
                    Get the app   <img src={Get_app} style={{height:20, width:20, marginLeft:10}}/>
                  </a>
                
                </button>
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
  .background-img {
    background-image: url(${new_hero_img});
    background-size: cover;
    background-position: top;
    height: 100vh;
  }
  .home-button {
    background-color: #22669c;
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3);
    border-radius: 8px;
    border: none;
    padding: 15px 20px;
    color: white;
  }
  .home-heading {
    font-size: var(--font-size-48px);
    font-weight: var(--font-weight-500);
    line-height: 56px;
    letter-spacing: 0em;
    color: var(--font-color-for-content);
    padding-top: 235px;
    color: white;
  }
  .home-text {
    font-size: var(--font-size-16px);
    font-weight: var(--font-weight-300);
    line-height: 19px;
    letter-spacing: 0em;
    color: var(--font-color-for-header);
    padding-bottom: 15px;
    color: white;
  }
  .ripple1 {
    // background-position: center;
    // transition: background 0.8s;
   	color:#26649D;
     font-weight: bold;
    top: 602px;
    left: 240px;
    width: 165px;
    height: 56px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -ms-box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    -o-box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    -webkit-box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    -moz-box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    box-shadow: 0px 8px 16px 1px rgba(30, 30, 30, 0.3);
    background: rgba(128, 221, 239, 1);
  }
  .ripple1:hover {
    background: #4b68b8 radial-gradient(circle, transparent 1%, #4b68b8 1%)
      center/15000%;
  }
  .ripple1:active {
    background-color: #e8e8e8;
    background-size: 100%;
    transition: background 0s;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .home-page-text .container-fluid {
      width: 85%;
    }
    .home-heading {
      font-size: var(--font-size-24px);
      line-height: 28px;
      font-weight: var(--font-weight-500);
    }
    .home-text {
      font-size: var(--font-size-14px);
      line-height: 16px;
      font-weight: var(--font-weight-300);
    }
  }
`;

export default Hero;
