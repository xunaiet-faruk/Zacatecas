import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import Parksoris from '../Components/Images/Industral-Parks-OSIRIS-Changes.png'
// import "./Park1Hero.css"

const texts = {
  en: {
    heading: 'Industrial Park',
    subheading: 'Osiris',
  },
  es: {
    heading: 'Parque Industrial',
    subheading: 'Osiris',
  },
  fr: {
    heading: 'Parc Industriel',
    subheading: 'Osiris',
  },
  de: {
    heading: 'Industriepark',
    subheading: 'Osiris',
  },
  ja: {
    heading: '産業パーク',
    subheading: 'オシリス',
  },
  zh: {
    heading: '工业园区',
    subheading: '奥西里斯',
  },
  ko: {
    heading: '산업 공원',
    subheading: '오시리스',
  },
};

  
  
export default function Park2Hero() {
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

  const { heading, subheading } = texts[lang];

  return (
    <div
      className="hero-border"
      style={{
        backgroundImage: `url(${Parksoris})`,
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
