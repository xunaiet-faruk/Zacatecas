import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
// import "./Park1Hero.css"

const texts = {
  en: {
    heading: 'Airport Industrial',
    subheading: 'Park I + II',
  },
  es: {
    heading: 'Industria Aeroportuaria',
    subheading: 'Parque I + II',
  },
  fr: {
    heading: 'Industrie Aéroportuaire',
    subheading: 'Parc I + II',
  },
  de: {
    heading: 'Flughafenindustrie',
    subheading: 'Park I + II',
  },
  ja: {
    heading: '空港産業',
    subheading: 'パーク I + II',
  },
  zh: {
    heading: '机场工业',
    subheading: '园区 I + II',
  },
  ko: {
    heading: '공항 산업',
    subheading: '파크 I + II',
  },
};

  
export default function Park4Hero() {
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

  const { heading, subheading ,} = texts[lang];

  return (
    <div
      className="hero-border"
      style={{
        backgroundImage: `url(../assets/Park4.png)`,
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
