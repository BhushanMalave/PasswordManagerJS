import React from "react";
//import { NavLink, Link, useNavigation } from "react-router-dom";
import "./Home.css";
import { ViewComponent } from "../../components/ViewComponent";
export const Home = () => {
  return (
    <div className="main-container">
      <div className="sideBar">
        <img
          src={require("../../images/burger_menu.png")}
          className="menuimg"
          alt="menu"
        />
        <img
          src={require("../../images/home_icn.png")}
          className="homeimg"
          alt="home"
        />
      </div>
      <div className="side-conatiner">
        <div className="mobiletabbar">
          <img
            src={require("../../images/burger_menu.png")}
            className="mmenu"
            alt="menu"
          />
          <img
            src={require("../../images/pass.png")}
            className="pass"
            alt="logo"
          />
          <img
            src={require("../../images/search.png")}
            className="msearch"
            alt="search"
          />
          <img
            src={require("../../images/sync_icn.png")}
            className="msync"
            alt="sync"
          />
          <img
            src={require("../../images/profile.png")}
            className="mprofile"
            alt="profile"
          />
        </div>
        <div className="tabBar">
          <img
            src={require("../../images/logo2.png")}
            className="logoimage"
            alt="logo"
          />
          <div className="divboxcontainer">
            <img
              src={require("../../images/sync1.png")}
              alt="sync"
              className="syncimg"
            />

            <img
              src={require("../../images/profile1.png")}
              alt="profile"
              className="profileimg"
            />
          </div>
        </div>
        <div className="side-conatiner1">
          <div className="viewContainer">
            <div className="topbarin2">
              <div className="textSites">
                Sites
                <div className="line" />
              </div>
              <div className="viewaddbtn">
                <div className="searchfield">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className="searchfieldin"
                  />
                  <img
                    src={require("../../images/search1.png")}
                    className="searchicn"
                    alt="searchicn"
                  />
                </div>
                <img
                  src={require("../../images/add_btn.png")}
                  className="addbtn"
                  alt="addbtn"
                />
              </div>
            </div>
            {false ? (
              <div className="topbarin3">
                <div className="textSites">
                  Sites
                  <div className="line" />
                </div>
                <div className="headingview1">
                  <p className="heading">Social Media</p>
                  <div className="oval">
                    <p className="number">07</p>
                  </div>
                  <img
                    src={require("../../images/Path.png")}
                    className="pathicn"
                    alt="pathicn"
                  />
                </div>
              </div>
            ) : (
              <div className="topbarin3">
                <div className="searchfield">
                  <input
                    type="text"
                    placeholder="      Type kewords to search"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    className="searchfieldin"
                  />
                  <img
                    src={require("../../images/search1.png")}
                    className="searchicn"
                    alt="searchicn"
                  />
                </div>
              </div>
            )}

            <div className="headingview">
              <p className="heading">Social Media</p>
              <div className="oval">
                <p className="number">07</p>
              </div>
              <img
                src={require("../../images/Path.png")}
                className="pathicn"
                alt="pathicn"
              />
            </div>

            <div className="components">
              <ViewComponent /> <ViewComponent /> <ViewComponent />
              <ViewComponent /> <ViewComponent /> <ViewComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
