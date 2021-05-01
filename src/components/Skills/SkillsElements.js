import styled from 'styled-components'


export const SkillsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1800px;
}
`

export const SkillsCard = styled.div`
    background: #e88dcd;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const SkillsIcon = styled.img`
    height: 120px;
    width: 160px;
    margin-bottom: 10px;
`


export const SkillsH1 = styled.h1`
    font-size: 40px;
    color: black;
    /* margin-bottom: 64px;
    margin-top: 64px; */

/* @media screen and (max-width: 480px){
    
} */
`


export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    height: 60%;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 20px;
}
`
export const SkillsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const SkillsP = styled.p`
    font-size: 1rem;
    text-align: center;
`