import React from "react";
import styled from "styled-components";
import Visual_recall_img from "../assets/Visual_recall_img.png";
import Visual_recall_img_2 from "../assets/Visual_recall_img_2.png";
import Visual_recall_img_3 from "../assets/Visual_recall_img_3.png";
// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
const VisualRecallCarosel = () => {
  return (
    <Wrapper>
      
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Visual_recall_img} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Visual_recall_img_2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Visual_recall_img_3} class="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <!-- <button class="carousel-control-prev" type="button"
                          data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> -->
                      <!-- <img src="./img/greater.svg" alt=""> -->
                      <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                      <!-- <span class="visually-hidden">Previous</span>
                      </button> -->
                      <!-- <button class="carousel-control-next" type="button"
                          data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> -->
                      <!-- <img src="./img/less.svg" alt=""> -->
                      <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                      <!-- <span class="visually-hidden">Next</span>
                      </button> --> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .img {
    background-image: url(${Visual_recall_img});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 70vw;
  }
  .olfaction-content h1 {
    font-weight: 600;
    line-height: 40px;
    line-height: 47px;
    // text-align: center;
    padding-top: 450px;
    padding-bottom: 20px;
    color: white;
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
      font-weight: 300;
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

export default VisualRecallCarosel;
