import React from "react";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Layouts/Header.js";
import Footer from "./Layouts/Footer.js";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import Home from "./Pages/Home/Home.js";
import Aboutus from "./Pages/About us/AboutUs.js";
import Login from "./Component/Auth/Login.js";
import Signup from "./Component/Auth/Signup.js";
import { PostRequests } from "./Post/PostRequest";
import { PostRequestAsyncAwait } from "./Post/PostRequestAsyncAwait.js";
import { PostRequestErrorHandling } from "./Post/PostRequestErrorHandling.js";
import { PostRequestHooks } from "./Post/PostRequestHooks.js";
import { PostRequestSetHeaders } from "./Post/PostRequestSetHeaders.js";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/about-us" element={<Aboutus></Aboutus>} />
        <Route exact path="/Login" element={<Login></Login>} />
        <Route exact path="/Signup" element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
      {/* <PostRequests />
      <PostRequestAsyncAwait />
      <PostRequestErrorHandling />
      <PostRequestHooks />
      <PostRequestSetHeaders /> */}
    </>
  );
}
export default App;
