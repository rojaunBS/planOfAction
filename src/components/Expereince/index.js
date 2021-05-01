import React from 'react'
import {ExperienceContainer, ExperienceWrapper,ExperienceTitle, ExperienceCard, CompanyName, JobTitle, Years, Subtitle, LangTech, DescriptionH1, DescriptionUl, DescriptionLi} from './ExperienceElements'



const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceTitle>Current Events</ExperienceTitle>
            <ExperienceWrapper>
                <ExperienceCard>
                    <CompanyName>New York City Pride</CompanyName>
                    <JobTitle>210 Elizabeth St, New York, NY</JobTitle>
                    <Years>Thu, Jun 24, 3:30 AM – Tue, Jun 29, 2:30 AM</Years>
                    <DescriptionH1>About the Event</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>New York City Pride March is an event celebrating the LGBTQ community; it is one of the largest annual Pride marches in the world, attracting tens of thousands of participants and millions of sidewalk spectators each June </DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                <ExperienceCard>
                    <CompanyName>CT Gay Men's Chorus</CompanyName>
                    <JobTitle>300 Main St, Old Saybrook, CT</JobTitle>
                    <Years>Sun, May 23, 3 PM</Years>
                    <DescriptionH1>About the Event</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>Rescheduled from 9/26/20 Connecticut Gay Men's Chorus The British Are Coming! We're crossing the pond to explore British hits that have topped the charts for decades! It's the best of the Brits, from David Bowie and The Who to George Michael and Adele!</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                <ExperienceCard>
                    <CompanyName>Boston Gay Pride</CompanyName>
                    <JobTitle>Boston, MA</JobTitle>
                    <Years>Mon, Jun 7 – Sun, Jun 13</Years>
                    <DescriptionH1>About the Event</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>Boston Gay Pride Week takes place every year in June and is the largest Gay Pride event in New England. The event includes a series of neighbourhood block parties and the main parade. Highlights of Boston Gay Pride week include the official flag raising ceremony, a pride day celebration, a Pride night in the legendary Fenway Park and the High Heel Dash for Charity.</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience
