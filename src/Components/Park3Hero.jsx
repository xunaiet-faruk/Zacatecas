import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
// import "./Park1Hero.css"
import  FRESNILIIO from './Images/Industrial-Parks-FRESNILLO-II-Changes.png' 
const texts = {
  en: {
    heading: 'Fresnillo Industrial',
    subheading: 'Park II',
  },
  es: {
    heading: 'Industria en Zacatecas',
    subheading: 'Bienes raíces',
  },
  fr: {
    heading: 'Industrie à Zacatecas',
    subheading: 'Immobilier',
  },
  de: {
    heading: 'Industrie in Zacatecas',
    subheading: 'Immobilien',
  },
  ja: {
    heading: 'サカテカスの産業',
    subheading: '不動産',
  },
  zh: {
    heading: '萨卡特卡斯的工业',
    subheading: '房地产',
  },
  ko: {
    heading: '자카테카스 산업',
    subheading: '부동산',
  },
};

  
  
export default function Park3Hero() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang,setlang] = useState(Cookies.get('language') || 'en');

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
     
    }, 1); 

    return () => clearInterval(interval); 
  }, []);

  const { heading, subheading ,paragraph,paragraph1} = texts[lang];

  return (
    <div
      className="hero-border"
      style={{
        backgroundImage: `url(${FRESNILIIO})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '77vh',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderBottom: '5px solid #efbcbc',
      }}
    >
      <h3 className="hero-heading">{heading}</h3>
      <h1 className="hero-subheading">{subheading}</h1>
    
    </div>
  );
}
