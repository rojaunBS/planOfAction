import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/Info Section';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info Section/Data';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Footer from '../components/Footer'
import Experience from '../components/Expereince';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        //toggles from true to false and false to true
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <Experience/>

            <Skills/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Footer/>
        </>
    )
}

export default Home
