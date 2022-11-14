import React from "react";
import styled from "styled-components";
import Group_background from '../assets/Group_background.png'

const Olfaction = () => {
  return (
    <Wrapper>
      <section class="img olfaction-section"> 
        <div class="container-fluid p-0 ">
          <div class="olfaction-content">
            <div class="row ">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h1>
                Can your senses decline? How <br/>
                 do you even begin to keep a <br/>
                 track of your senses?
                </h1>
                <p>
                With SensifyAware you can test your senses and evaluate <br/>
                your mental cognition.
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
    background-image: url(${Group_background});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 70vw;
    margin-bottom: -8vw;

  }
  .olfaction-content h1 {
    font-weight: 600;
    line-height: 40px;
    line-height: 47px;
    // text-align: center;
    padding-top: 30vw;
    padding-bottom: 20px
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

export default Olfaction;
