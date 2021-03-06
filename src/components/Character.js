// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div `
    display: flex;
    justify-content: center;
    
`

const StyledContainer = styled.div `
    color: #e89e10;
    background: #2e4558;
    margin-bottom: 8%;
    display: flex;
    justify-content: space-around;
    border: 4px solid #9f0613;
    border-radius: 10px;
    width: 70%;
`
const StyledParagraph = styled.p `
    font-family: "Noto Sans";
    font-size: 2.5rem;
    text-decoration: underline;
    letter-spacing: 5px;
`

const Character = (props) => {
    // This component will receive the characters list from state
    // and render individual character cards.
    // For now, this component will render simply the name and birthdate.
    // If additional time allows after meeting mvp, we will add more data and create a drop down toggle for each card.
    const {character} = props
    console.log(character)
    return (
        <StyledDiv>
            <StyledContainer>
                <StyledParagraph>{character.name}</StyledParagraph>
                <StyledParagraph>{character.birth_year}</StyledParagraph>
            </StyledContainer>

        </StyledDiv>
    );
}

export default Character;