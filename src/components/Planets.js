import React from 'react'
import styled from 'styled-components'

// This file holds the planets from Star Wars!

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
    font-size: 1rem;
    text-decoration: underline;
    letter-spacing: 5px;
`


const Planets = (props) => {

    const {planets} = props
}

export default Planets