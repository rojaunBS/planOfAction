import React, {useState} from 'react'
import Typewriter from 'typewriter-effect';
import Video from '../../videos/video3.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight,HeroSpan1} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
            <HeroSpan1><HeroH1>Let's learn about the LGBTQ+ Community</HeroH1></HeroSpan1>
                {/* <HeroP>Hover Above for a greeting</HeroP> */}
                <Typewriter
                        options={{
                            strings: ["Pride", "Diversity",
                        "Individuality","Sexuality"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter = {onHover} onMouseLeave = {onHover}
                    primary = 'true' dark = 'false'smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Learn More :) { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
