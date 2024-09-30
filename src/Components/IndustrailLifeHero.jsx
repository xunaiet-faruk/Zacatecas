import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import "./IndustrailLifeHero.css"

const texts = {
    en: {
      heading: 'Zacatecas Industrial',
      subheading: 'Real Estate',
      paragraph: 'Zacatecas has top notch industrial infrastructure, ideally located in Mexico, with highly competitive conditions and attractive incentives.',
      paragraph1: 'competitive conditions and attractive incentives.'
    },
    es: {
      heading: 'Industria en Zacatecas',
      subheading: 'Bienes raíces',
      paragraph: 'Zacatecas cuenta con una infraestructura industrial de primera categoría, idealmente ubicada en México, con condiciones altamente competitivas e incentivos atractivos.',
      paragraph1: 'condiciones competitivas e incentivos atractivos.'
    },
    fr: {
      heading: 'Industrie à Zacatecas',
      subheading: 'Immobilier',
      paragraph: 'Zacatecas dispose d\'une infrastructure industrielle de premier ordre, idéalement située au Mexique, avec des conditions hautement compétitives et des incitations attrayantes.',
      paragraph1: 'conditions compétitives et des incitations attrayantes.'
    },
    de: {
      heading: 'Industrie in Zacatecas',
      subheading: 'Immobilien',
      paragraph: 'Zacatecas verfügt über erstklassige industrielle Infrastruktur, ideal gelegen in Mexiko, mit hoch konkurrenzfähigen Bedingungen und attraktiven Anreizen.',
      paragraph1: 'konkurrenzfähigen Bedingungen und attraktiven Anreizen.'
    },
    ja: {
      heading: 'サカテカスの産業',
      subheading: '不動産',
      paragraph: 'サカテカスは、メキシコに理想的に位置し、非常に競争力のある条件と魅力的なインセンティブを備えた、一流の産業インフラを有しています。',
      paragraph1: '競争力のある条件と魅力的なインセンティブを備えています。'
    },
    zh: {
      heading: '萨卡特卡斯的工业',
      subheading: '房地产',
      paragraph: '萨卡特卡斯拥有一流的工业基础设施，地理位置理想，条件竞争力强，激励措施吸引人。',
      paragraph1: '竞争力强，激励措施吸引人。'
    },
    ko: {
      heading: '자카테카스 산업',
      subheading: '부동산',
      paragraph: '자카테카스는 멕시코에 이상적으로 위치한 일류 산업 인프라를 갖추고 있으며, 매우 경쟁력 있는 조건과 매력적인 인센티브를 제공합니다.',
      paragraph1: '경쟁력 있는 조건과 매력적인 인센티브를 제공합니다.'
    },
  };
  
  
export default function IndustrailLifeHero() {
  // Determine the current language from cookies or fallback to 'en'
  const [lang,setlang] = useState(Cookies.get('language') || 'en');

  useEffect(() => {
    const interval = setInterval(() => {
      const savedLanguage = Cookies.get("language");
      if (savedLanguage) {
        setlang(savedLanguage);
      }
      // console.log(lang);
    }, 1); // Check every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const { heading, subheading ,paragraph,paragraph1} = texts[lang];

  return (
    <div
      className="hero-border"
      style={{
        backgroundImage: `url(../assets/indusbackground.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '77vh',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white',
        borderBottom: '5px solid #efbcbc',
      }}
    >
      <h3 className="Headingupper ">{heading}</h3>
      <h1 className="Headingsub">{subheading}</h1>
      <div className='w-industpara'>
      <div className='induspara'>{paragraph}</div>
      {/* <p className='induspara'>{paragraph1}</p> */}
      </div>
    </div>
  );
}
