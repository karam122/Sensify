import React from "react";
import styled from "styled-components";
import Evaluation_kit from '../assets/Evaluation_kit.png'

const EvaluationKit = () => {
  return (
    <Wrapper>
      <section class="img olfaction-section"> 
        <div class="container-fluid p-0 ">
          <div class="olfaction-content">
            <div class="row ">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h1>
                It is possible to detect decline <br/>
                in olfaction with the <br/>
                Scentaware Evaluation kit
                </h1>
                <p>
                Test your sense of smell with Scentaware Smell Evaluation and Therapy kit, and take <br/>
                pre-emptive action against neurodegenerative disorders.
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
  .img {
    background-image: url(${Evaluation_kit});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 70vw;
  }
  .olfaction-content h1 {
    font-weight: 600;
    // font-size:40px;
    line-height: 38px;
    line-height: 47px;
    // text-align: center;
    padding-top: 100px;
    // padding-bottom: 20px;
  }
  .olfaction-content span {
    font-weight: 600;
  }
  .olfaction-content p {
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    // text-align: center;
    // padding: 30px 100px 0px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .olfaction-section .container-fluid {
      width: 85%;
    }
    .img {
width: auto;
    }
    .olfaction-content h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      padding-top: 50px;
    }
    .olfaction-content p {
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      padding: 20px 0px 0px;
    }
  }
`;

export default EvaluationKit;
