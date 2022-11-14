import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutNav from "./components/CheckoutNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./components/Sticks.jsx";
import Mission from "./components/Olfactory.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Shop from "./components/Shop.jsx";
import MainCheckOut from "./pages/MainCheckOut.jsx";
import Cart from "./components/Cart.jsx";
import Product_Cart from "./components/Product_Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from "./components/Payment.jsx";
import Order_Review from "./components/Order_Review.jsx";
import { useGlobalContext } from "./context/context";
import Thankyou from "./components/Thankyou.jsx";
import Signup from "./components/Login Pages/Signup.jsx";
import Signin from "./components/Login Pages/Signin.jsx";
import Confirmation from "./components/Login Pages/Confirmation.jsx";
import Dialogue from "./components/Dialogue.jsx";
import Dialogueup from "./components/Dialogueup.jsx";
import DialogueConfirm from "./components/DialogueConfirm.jsx";
import ForgetPassword from "./components/Login Pages/ForgetPassword.jsx";
import PasswordResetLink from "./components/Login Pages/PasswordResetLink.jsx";
import ResetPassword from "./components/Login Pages/ResetPassword.jsx";
import ResetSuccessfully from "./components/Login Pages/ResetSuccessfully.jsx";
import Navbar from "./components/Navbar.jsx";
import UserProfile from "./components/UserProfile.jsx";
import YourOrders from "./components/YourOrders.jsx";
import YetToDispatch from "./components/YetToDispatch.jsx";
import EditProfile from "./components/EditProfile.jsx";
import MobileScreen from "./pages/MobileAppScreen.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Research from "./components/Research/Research.jsx";
import { HashRouter } from "react-router-dom";
import { gapi } from "gapi-script";

function App() {
  var LoginEmail = localStorage.getItem("Current_Login_user");
  console.log(LoginEmail, "LoginEmail");
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "556697962564-stpofqfiu9j642u70a1nl3istr5iuen4.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<HomePage />} />
        <Route path="mobile-screen" element={<MobileScreen />} />
        <Route path="Signup" element={<Dialogueup />}></Route>
        <Route path="Signin" element={<Dialogue />}></Route>
        <Route path="Confirmation" element={<DialogueConfirm />}></Route>
        <Route path="MainCheckOut" element={<MainCheckOut />}></Route>
        <Route path="Product_Cart" element={<Product_Cart />}></Route>
        <Route path="Shipping" element={<Shipping />}></Route>
        <Route path="Payment" element={<Payment />}></Route>
        <Route path="Thankyou" element={<Thankyou />}></Route>
        <Route path="Order_Review" element={<Order_Review />}></Route>
        <Route path="forget_Password" element={<ForgetPassword />} />
        <Route path="Forgot_PasswordLink" element={<PasswordResetLink />} />
        <Route path="reset_Password" element={<ResetPassword />} />
        <Route path="reset_Successfully" element={<ResetSuccessfully />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="yourOrders" element={<YourOrders />} />
        <Route path="yet-Dispatch" element={<YetToDispatch />} />
        <Route path="edit-Profile" element={<EditProfile />} />
        <Route path="research" element={<Research />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
