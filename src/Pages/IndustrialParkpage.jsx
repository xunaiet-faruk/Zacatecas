import React from 'react'
import IndustrailLifeHero from '../Components/IndustrailLifeHero'
import OurServices from '../Components/OurServices'
import Area from '../Components/Area'
import About2 from '../Components/About2'
import Companies from '../Components/Companies'
import Countactus from '../Components/Countactus'

// Park 1 content

// import park1hero from '../Components/park1hero'


export default function IndustrialParkpage() {
  return (
    <div style={{overflowX:'hidden'}}>
        
        <IndustrailLifeHero/>
        <OurServices/>
        
        <Area/>
        <About2/>
        <Companies/>
        <Countactus/>

        

    </div>
  )
}



