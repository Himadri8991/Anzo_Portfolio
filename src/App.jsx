import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Header from './components/Header'
import SecondText from './pages/SecondText'
import WhatIDo from './pages/WhatIDo'
import HowCanIHelp from './pages/HowCanIHelp'
import RightFit from './pages/RightFit'
import SoftSkills from './pages/SoftSkills'
import ReachMe from './pages/ReachMe'
import GotAnIdea from './pages/GotAnIdea'

const App = () => {
  return (
    <>
    <div id="main">
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <WhatIDo />
    <SecondText />
    <Page5 />
    <Page6 />
    <Page7 />
    <HowCanIHelp />
    <RightFit />
    <SoftSkills />
    <ReachMe />
    <GotAnIdea />
    </div>
    </>
  )
}

export default App