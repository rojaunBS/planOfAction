import React from 'react'
import foundationIcon from '../../images/foundation.png'
import prideIcon from '../../images/pride.png'
import eldersIcon from '../../images/elders.png'

import {SkillsContainer, SkillsH1, SkillsWrapper,SkillsCard,SkillsIcon,SkillsH2,SkillsP} from './SkillsElements'


const Skills = () => {

    return (

        <SkillsContainer id="skills">
            <SkillsH1>Helpful Links</SkillsH1>
            <h2>(click on icon)</h2>
            {/* <Scroll> */}
                <SkillsWrapper>
                    <SkillsCard>
                        <a href="https://lgbt.foundation/?__cf_chl_jschl_tk__=c2de231ce83528e9ebdd27a6eb718cc7df47e4b0-1619759258-0-AVp6Fd5ctBVqhjJQgz9Sm7oF_H0t6teFKzUhvLMsSA9e37cfLvbd1KFeTlWDQLR8vT_J6uIq7LAt3y1CEolKjn1-LgUWNEjjTpzUwXuRzMFx1Q2tu0xL0b8NozvbO_WPlZ_skGir3I-SS5LIhSm0sMcxVHBB-inoHQU5uRjclO-pEPbpyJePgq-SdaV5ToXiB8VRkZ0TVipbwMW6BNoAZRAQbwyzmm9LIN_TikGmEX-t0dCHIAUAgXgXIRGWTscLU8fBWu4NfoRDjhcUyCqcOP9YL8ZOlDYrDtoUg65DjowC4FdduO9IM3sPmtK93dD-QR9aNpNbL3U12j1lIjYmN2lm6C3RdKu1ul1lgQdGkqZnWeYfCHcOvJNECDZxn6-nVywWkq-_0azqbVw6s07AlfM" target="_blank"><SkillsIcon src={foundationIcon}/></a>
                        <SkillsH2>LGBT FOUNDATION</SkillsH2>
                        <SkillsP>A national charity delivering advice, support and information services to lesbian, gay, bisexual and trans (LGBT) communities</SkillsP>
                        
                    </SkillsCard>
                    <SkillsCard>
                        <a href="http://www.pridefund.org/" target="_blank">
                        <SkillsIcon src={prideIcon}/></a>
                        <SkillsH2>Pride Fund</SkillsH2>
                        <SkillsP>This is a call-to-action for all Americans to stand up and demand action from our elected officials</SkillsP>
                    </SkillsCard>
                    <SkillsCard>
                        <a href="https://www.sageusa.org/" target="_blank"><SkillsIcon src={eldersIcon}/></a>
                        <SkillsH2>SAGE</SkillsH2>
                        <SkillsP>A national advocacy and services organization that's been looking out for LGBT elders since 1978</SkillsP>
                    </SkillsCard>
                    
                    
                </SkillsWrapper>
            {/* </Scroll> */}
        </SkillsContainer>
    )
}

export default Skills
