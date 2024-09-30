import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import "./About2.css";


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
    // Replace with your PDF URL or Blob
    const pdfUrl = 'Invest in Zactecas.pdf';
  
    // Create a new anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Invest in Zactecas.pdf'; // Specify the file name for download
    anchor.click(); // Trigger the click event to initiate download
};




export default function About2() {
  return (
    <div
      className="area-border"
      style={{
        width: "100%",
        height: "max-content",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
          <div className="col-6 col-md-6 col-sm-6 ">
            <h1>About us</h1>
            <div className="about-underline"></div>

            <div>
              <div className="mt-4">
                <p className="p-about-width font-p-about">
                  We are part of the Zacatecas State Government and its Ministry
                  of Economy. We support incoming companies from the site
                  selection process all the way through the different stages of
                  the operations.
                </p>
              </div>

              <div className="mt-4">
                <p className="p-about-width font-p-about">
                  We are a proactive and business-friendly team that wants to
                  make your project as successful as possible and at the same
                  time foster economic development in our state, creating a
                  win-win situation for everyone.
                </p>
              </div>

              <div>
              <Link to="/" style={{textDecoration:'none'}} onClick={scrollToTop} >
                <button
                  className="buttonn d-flex align-items-center"
                  style={{
                    backgroundColor: "#571517",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "500",
                    padding: "5px 20px",
                    paddingRight: "5px",
                    borderRadius: "30px",
                    border: "1px solid #efbcbc",
                    marginTop: "20px",
                  }}
                >
                  Learn More
                  <img
                    src={"../assets/contactus.png"}
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
     
                  />
                </button>
                </Link>

              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-sm-6">
            <img src="../assets/about2.png" alt="" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
