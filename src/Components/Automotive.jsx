import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Example context to manage language state
const LanguageContext = React.createContext();

export default function Automotive() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState(Cookies.get("language") || "en");

  const handleDownloadPdf = () => {
    // Replace with your PDF URL or Blob
    const pdfUrl = 'Invest in Zactecas.pdf';
    
    // Create a new anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Invest in Zactecas.pdf'; // Specify the file name for download
    anchor.click(); // Trigger the click event to initiate download
  };

  // Example translations object with image paths
  const translations = {
    en: {
      title1: "AUTOMOTIVE",
      title2: "INDUSTRY",
      button1: "DOWNLOAD OUR PDF",
      button2: "CONTACT US",
      desk1Image: "../assets/desk1.png",
      desk2Image: "../assets/desk2.png",
    },
    es: {
      title1: "INDUSTRIA",
      title2: "AUTOMOTRIZ",
      button1: "DESCARGAR NUESTRO PDF",
      button2: "CONTÁCTENOS",
      desk1Image: "../assets/desk1_es.png",
      desk2Image: "../assets/desk2_es.png",
    },
    de: {
      title1: "AUTOINDUSTRIE",
      title2: "BRANCHE",
      button1: "LADEN SIE UNSER PDF HERUNTER",
      button2: "KONTAKTIERE UNS",
      desk1Image: "../assets/desk1_de.png",
      desk2Image: "../assets/desk2_de.png",
    },
    ja: {
      title1: "自動車",
      title2: "業界",
      button1: "PDFをダウンロード",
      button2: "お問い合わせ",
      desk1Image: "../assets/desk1_ja.png",
      desk2Image: "../assets/desk2_ja.png",
    },
    zh: {
      title1: "汽车",
      title2: "行业",
      button1: "下载我们的PDF",
      button2: "联系我们",
      desk1Image: "../assets/desk1_zh.png",
      desk2Image: "../assets/desk2_zh.png",
    },
    ko: {
      title1: "자동차",
      title2: "산업",
      button1: "PDF 다운로드",
      button2: "문의하기",
      desk1Image: "../assets/desk1_ko.png",
      desk2Image: "../assets/desk2_ko.png",
    },
    zh_tw: {
      title1: "汽車",
      title2: "行業",
      button1: "下載我們的PDF",
      button2: "聯繫我們",
      desk1Image: "../assets/desk1_zh.png",
      desk2Image: "../assets/desk2_zh.png",
    },
    fr: {
      title1: "AUTOMOBILE",
      title2: "INDUSTRIE",
      button1: "TÉLÉCHARGER NOTRE PDF",
      button2: "NOUS CONTACTER",
      desk1Image: "../assets/desk1_fr.png",
      desk2Image: "../assets/desk2_fr.png",
    },
  };

  // Function to handle mouse move for rotation
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    setRotation(angle);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 992;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    checkIfMobile();
    const resizeListener = () => {
      checkIfMobile();
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }, 1000); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <LanguageContext.Consumer>
      {(value) => {
        // const { language } = value;

        return (
          <div
            className="row d-flex justify-content-center"
            style={{
              padding: "50px 50px",
              backgroundColor: "#000",
              paddingBottom: "300px",
            }}
          >
            <div className="col-lg-10 col-md-6">
              <h1
                style={{ fontWeight: "bold", color: "#fff", textAlign: "left" }}
              >
                {translations[language].title1}
              </h1>
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#FFD003",
                  textAlign: "left",
                }}
              >
                {translations[language].title2}
              </h1>
              <img
                src="../assets/automotive.png"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ marginBottom: "50px" }}
              >
                <div className="col-lg-4 col-md-4 col-sm-6">
                  {isMobile ? (
                    <img
                      src="../assets/mob1.png"
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={translations[language].desk1Image}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  )}
                </div>
                <div
                  className="col-lg-4 col-md-4 col-sm-6"
                  onMouseMove={handleMouseMove}
                >
                  <img
                    src="../assets/industry2.png"
                    alt="Rotatable"
                    style={{
                      width: "100%",
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.1s",
                    }}
                  />
                  <img
                    src="../assets/industry1.png"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "-130px",
                    }}
                    alt=""
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  {isMobile ? (
                    <img
                      src="../assets/mob2.png"
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  ) : (
                    <img
                      src={translations[language].desk2Image}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ marginBottom: "80px" }}
              >
                <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
                   
                    
                    
             
                    <button 
                      className="buttonn d-flex align-items-center"
                      style={{
                        backgroundColor: "#fff",
                        color: "#571517",
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "5px 20px",
                        paddingRight: "5px",
                        borderRadius: "30px",
                        marginBottom: "10px",
                        width: "180px",
                        marginRight: "10px",
                        fontSize: "12px",
                      }}
                      onClick={handleDownloadPdf} // Attach onClick event handler for download
                    >
                      
                      {translations[language].button1}
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
                 
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-start">
                <a
                    href="mailto:yannick.berchtold@zacatecas.gob.mx"
                    style={{ textDecoration: "none" }}
                  >
                  <button
                    className="buttonn d-flex align-items-center"
                    style={{
                      backgroundColor: "#571517",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      padding: "5px 20px",
                      paddingRight: "5px",
                      width: "130px",
                      borderRadius: "30px",
                      marginBottom: "10px",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none", // Remove underline for anchor tag appearance
                    }}
                  >
                    {translations[language].button2}
                
                      <img
                        src="../assets/contactus.png"
                        alt="icon"
                        style={{ width: "20px", height: "20px", marginLeft:"10px"}}
                      />
                  </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
}
