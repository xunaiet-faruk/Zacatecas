import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const texts = {
  en: {
    why: "WHY",
    zacatecas: "ZACATECAS",
  },
  es: {
    why: "POR QUÉ",
    zacatecas: "ZACATECAS",
  },
  de: {
    why: "WARUM",
    zacatecas: "ZACATECAS",
  },
  ja: {
    why: "なぜ",
    zacatecas: "サカテカス",
  },
  zh: {
    why: "为什么",
    zacatecas: "萨卡特卡斯",
  },
  ko: {
    why: "왜",
    zacatecas: "사카테카스",
  },
  fr: {
    why: "POURQUOI",
    zacatecas: "ZACATECAS",
  },
  cmn: {
    why: "为什么",
    zacatecas: "萨卡特卡斯",
  },
  // Add more languages here...
};

export default function HeroSection() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      // console.log(language);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  const { why, zacatecas } = texts[language] || texts.en;

  return (
    <div
      className="hero-border"
      style={{
        backgroundImage: `url(../assets/hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "77vh",
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderBottom: "5px solid #efbcbc",
      }}
    >
      <h3 className="hero-heading">{why}</h3>
      <h1 className="hero-subheading">{zacatecas}</h1>
    </div>
  );
}
