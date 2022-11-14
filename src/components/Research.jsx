import React from "react";
import topImg from '../assets/researchTopImg.svg'
import styled from "styled-components";
import researchGraph from '../assets/researchGraph.svg'





const Research = () => {

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <p className="title ps-3">The mission.</p>
            <p className="discription ps-3">Olfactory dysfunction is a common feature in the older population, and its severity increases with aging. It may manifest early in neurodegenrative diseases as well as mild cognitive impairment and represents an important early clinical symptom suggestive of neurodegeneration.
            </p>
          </div> </div>
        <img src={topImg} alt="topImg" style={{ height: '100vh', width: '100%', objectFit: 'cover', objectPosition: '80% 10%' }} />

        {/* <div class="background-img">

                </div> */}
        <div className="row ">
          <div className="col second-image">

            <div className="row">
              <div className="col-3 left-container-div"></div>
              <div className="col-xs-12 col-sm-6">


                <div className="row justify-content-center">
                  <div className="col pt-5">
                    <p className="graph-title pt-3">Over 13 million people in America<br />
                      experience anosmia, a partial or complete<br /> loss of smell.</p>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col pt-5">
                    <p className="graph-discription">
                      Loss of smell is an early biomarker of various neurodegenerative diseases. Integrating sensory acuity with cognitive functions may help in developing tools for early detection of Alzheimer's disease in cognitively-healthy, at-risk individuals. SensifyAware integrates sensory acuity and cognitive functions through various self-assessment tools.
                    </p>
                  </div>
                </div>

                <div className="row research-graph justify-content-center pt-5">
                  <div className="col pt-5">
                    <img src={researchGraph} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="row">
                  <div className="col pt-5 ps-5 ms-5">
                    <p className="graph-end-discription ms-5 ps-5 ">
                      Add reference<br />
                      Also list the other modules,<br />
                      and say coming soon.
                    </p>
                  </div>
                </div>


              </div>
              <div className="col-3 right-container-div"></div>

            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

*{
  margin:0px;
  padding:0px;
}

.background-img {
    background-image: url(${topImg});
    background-size: cover;
    background-position: top;
    height: 100vh;
    object-fit: cover;
    object-position:80% 10%;

    
  }
  .second-image{
    position: absolute;
width: 100%;
height: 1233px;
// left: 24px;
// top: 780px;
background: #26649D;
  }
  .title{
    position: absolute;
    width: 296px;
    height: 28px;
    top:330px;
    left:15%;
    font-family: 'Work Sans';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 75px;
/* identical to box height */
color: #FFFFFF;
  }
  .discription{
    position: absolute;
    width: 296px;
    height: 28px;
    top:420px;
    left:15%;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }
  .graph-title{
    font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 38px;
text-align: center;

color: #FFFFFF;
  }

  .graph-discription{
    font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #FFFFFF;
  }

  .graph-end-discription{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align:center;
color: #FFFFFF;
  }
  
  

  @media Screen and (min-width: 320px) and (max-width: 480px) {
    .second-image{
      position: absolute;
  width: 100%;
  height: 800px;
  // left: 24px;
  // top: 780px;
  background: #26649D;
    }
    .title{
        position: absolute;
        width: 296px;
        height: 28px;
        top:330px;
        left:8%;
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
      }
      .discription{
        position: absolute;
        width: 296px;
        height: 28px;
        top:380px;
        left:8%;
        font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    
    color: #FFFFFF;
      }
      
      .left-container-div{
        display:none;
      }
      .right-container-div{
          display:none;
      }

      .graph-title{
        position:absolute;
        font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #FFFFFF;
padding:8%;
      }
    
      .graph-discription{
        position:absolute;
        font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: center;
padding:8%;
top:20%;
color: #FFFFFF;
      }

      .research-graph{
        position:absolute;
        padding:8%;
        top:33%;

      }

     .graph-end-discription{
      display:none;
     } 


  }


`

export default Research