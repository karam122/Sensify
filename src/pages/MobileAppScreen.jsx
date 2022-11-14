import React from "react";
import styled from "styled-components";
import logo_desktop from "../assets/logo_desktop.svg";
import logo_mobile from "../assets/logo_mobile.svg";
import logo from "../assets/Group3612.svg";
import carticon from "../assets/carticon.svg";
import hamburger from "../assets/hamburger.svg";
import user from "../assets/user.svg";
import { Outlet, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../src/components/Footer";
import Mobile_screen from "../assets/Mobile_screen.png";
import Appstore from "../assets/Appstore.png";
import Google_playstore from "../assets/Google_playstore.png";
import LogoName from "../assets/LogoName.svg";
// import { Container, Col } from "react-bootstrap";
import MobileNavbar from "../components/MobileScreenNavbar";
const MobileScreen = (props) => {

 
  return (
    <>
   
   <MobileNavbar />
      <NavContainer>

        <section class="home-section" id="home">
        <div class="background-img">
          {/* <Navbar /> */}
          {/* <div class="home-page-text"> */}

          <div class="container-fluid container-text p-0">
              <div class="col">
                <h1 class="home-heading">
                Track your senses
                  <br />with the
                  <br/>SensifyAware app
                </h1>
                <p class="home-text" >
                Evaluate your motor skills, memory, sense of
                  <br />
                   <p>smell, all in one place, Get the app now</p>
                   
                </p> 
              </div>
            </div>
           
            <div className="button-class">
              <img src={Google_playstore} alt="Google_playstore" className="Google-button" /> 
              <img src={Appstore} alt="Appstore" className="store-button"  />
              </div>
            
          {/* </div> */}
        </div>
      </section>
        
        {/* <div>
          <div >
            <div class="download-icons">
             <div className="buttons">
              <img class="size" src={Google_playstore} alt="Google_playstore" /> 
              <img class="size" src={Appstore} alt="Appstore" />
              </div>
            </div>
            <img
              class="background-image"
              src={Mobile_screen}
              alt="background-image"
            ></img>
          </div>
        </div> */}
      </NavContainer>
      <Footer />
    </>
  );
};

const NavContainer = styled.nav`

.container-fluid {
  width: 63%;
}
.background-img {
  position:relative;
  background-image: url(${Mobile_screen});
  background-size: cover;
  background-position: top;
  height: 100vh;
  width:100%
}

.container-text{
  position:absolute;
  top:250px;
  left:320px;
}

.button-class{
  position:absolute;
  top:590px;
  left:240px;
}

.Google-button{
  width:280px;
}

.home-text{
  position:absolute;
top:220px;
}
}

.store-button{
  width:280px;
}
.home-heading{
  color:white;
font-style: normal;
font-weight: 500;
font-size: 50px;
}
.home-text{
  color:white 
}


@media screen and (min-width: 700px) and (max-width: 1250px) {
  .container-text{
    position:absolute;
    top:200px;
    left:220px;
  }
  .button-class{
    position:absolute;
    top:540px;
    left:160px;
  }
  .store-button{
    width:230px;
  }
  .Google-button{
    width:230px;
  }
}

@media screen and (min-width: 280px) and (max-width: 700px) {
  .button-class{
    position:absolute;
    top:600px;
     left:90px;
  }
  .Google-button{
    width:180px;
  }
  
  .store-button{
    width:180px;
  }
  .container-text{
    position:absolute;
    top:250px;
    left:100px;
  }
  .home-heading{
    color:white;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  }
  .home-text{
    position:absolute;
  top:180px;
  }
  .button-class{
    position:absolute;
    top:540px;
    left:90px;
  }
  
 
}


//   .cursor {
//     cursor: pointer;
//   }
//   .background-image {
//     width: 100%;
//     object-fit: cover;
//   }
//   .buttons{
//     position:relative
//   }
//   .button-div{
//     position:relative
//   }
//   .download-icons {
//     // display: flex;
//     position: absolute;
//     padding-top: 600px;
//     padding-left: 200px;
//   }
//   .size {
//     height: 99px;
//     object-fit: cover;
//     width: 260px;
//     cursor: pointer;
//   }
//   .badge {
//     padding-left: 9px;
//     padding-right: 9px;
//     -webkit-border-radius: 9px;
//     -moz-border-radius: 9px;
//     border-radius: 9px;
//   }
//   .font {
//     font-size: 2px;
//   }
//   .label-warning[href],
//   .badge-warning[href] {
//     background-color: #c67605;
//   }
//   #lblCartCount {
//     font-size: 12px;
//     background: #ff0000;
//     color: #fff;
//     padding: 0 5px;
//     vertical-align: top;
//     margin-left: -10px;
//   }

//   .navbar {
//     background-color: white;
//     padding: 16px 0px 16px 0px;
//     position: absolute;
//     z-index: 1;
//     width: 63%;
//     filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.2));
//     border-radius: 0px 0px 8px 8px;
//   }
//   .navbar-nav {
//     margin-left: auto;
//   }
//   .container-fluid {
//     width: 63%;
//   }
//   .navbar-brand {
//     padding-left: 82px;
//   }
//   /* .navbar-collapse {
//   padding-right: 42px;
// } */
//   .nav-item {
//     padding: 0px 11px;
//   }
//   .nav-item-icon-cart {
//     padding: 0px 25px 0 15px;
//     // cursor: pointer;
//   }
//   .navbar-nav .nav-link {
//     font-size: var(--font-size-16px);
//     font-weight: var(--font-weight-500);
//     font-style: var(--font-sytle-normal);
//     color: var(--font-color-for-header);
//     line-height: 19px;
//     color: #1e1e1e;
//     font-family: Work Sans;
//     font-size: 16px;
//   }
//   .navbar-brand .desktop {
//     display: none;
//   }
//   .navbar-brand .mobile {
//     display: block;
//   }
//   .nav-link-mobile {
//     display: none;
//   }
//   @media screen and (min-width: 992px) and (max-width: 1150px) {
//     .navbar-brand {
//       padding-left: 15px;
//     }
//     .download-icons {
//       // display: flex;
//       position: absolute;
//       padding-top: 400px;
//       padding-left: 100px;
//     }
//   }
//   @media Screen and (min-width: 320px) and (max-width: 767px) {
//     .nav-link-mobile {
//       display: block;
//     }
//     .cart-mobile {
//       display: none;
//     }

//     .navbar {
//       width: 100%;
//       border-radius: 0px 0px 0px 0px;
//     }
//     // .nav-item-icon-cart {
//     //   padding: 0px 0px 0px 20px;
//     // }
//     .navbar-brand .mobile {
//       display: none;
//     }
//     .navbar-brand .desktop {
//       display: block;
//     }
//     .container-fluid {
//       width: 100%;
//     }
//     .navbar-brand {
//       padding-left: 30px;
//     }
//     .navbar-nav {
//       margin-left: 10px;
//     }
//     .navbar-toggler {
//       padding: 0.25rem 2rem;
//     }
//     .download-icons {
//       // display: flex;
//       position: absolute;
//       padding-top: 300px;
//       padding-left: 50px;
//     }
//   }
`;

export default MobileScreen;
