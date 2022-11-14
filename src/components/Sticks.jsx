import React from "react";
import styled from "styled-components";
// import i_sticks from "../assets/i_sticks.svg";
import new_sensify_app  from "../assets/new_sensify_app.png";
const Sticks = () => {
  return (
    <Wrapper>
      <section class="about-section" id="about">
        <div class="about-img col-lg-6 col-md-6 col-sm-12">
          <div class="home-page-text">
            <div class="container-fluid p-0">
              <div class="col">
                <p class="home-heading">
                  An interactive platform
                  <br />
                  that helps you evaluate
                  <br />
                  your senses and cognition.
                </p>
                <p class="home-text">
                  It is a long established fact that a reader will be
                  <br />
                  <span>distracted by the readable content of a page when</span>
                  <br />
                  <span>looking at its layout.</span>
                </p>
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
  .home-heading {
    font-size: var(--font-size-48px);
    font-weight: var(--font-weight-500);
    line-height: 56px;
    letter-spacing: 0em;
    color: var(--font-color-for-content);
    padding-top: 150px;
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
  .about-img {
    background-image: url(${new_sensify_app});
    background-size: cover;
    // position: absolute;
    background-repeat: no-repeat;
    // position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 100vh;
    // object-fit: cover;
  }

  .about-content {
    padding-top: 198px;
    color: var(--font-color-for-content);
  }
  .about-content h3 {
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-32px);
    line-height: 38px;
    color: var(--color-white);
    padding-bottom: 50px;
  }

  .about-content p,
  ul {
    font-weight: var(--font-weight-300);
    font-size: var(--font-size-16px);
    color: var(--color-white);
    line-height: 19px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .about-section .container-fluid {
      width: 85%;
    }
    .home-page-text .container-fluid {
      width: 85%;
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
    .about-content {
      padding-top: 50px;
      padding-left: 5px;
    }
    .about-content h3 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-500);
      line-height: 28px;
      padding-bottom: 0px;
    }
    .about-content p,
    ul {
      font-size: var(--font-size-14px);
      line-height: 16px;
      padding-top: 0px;
    }
    .about-content p {
      padding-right: 0px;
      padding-top: 32px;
    }
    .about-img {
      background-position: 70%;
    }
    .about-img .container1 {
      padding: 0px 40px;
    }
  }
`;

export default Sticks;
