import React from 'react'
import styled from 'styled-components'

function Section({title, description, bgImage, leftButtonText, rightButtonText}) {
    return (
        <div>
            <Container bgImage={ bgImage }>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
                <ButtonGroup>
                    <LeftButton>{ leftButtonText }</LeftButton>
                    <RightButton>{ rightButtonText }</RightButton>
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg'/>
            </Container>
        </div>
    )
}

export default Section

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`
const ButtonGroup = styled.div`
    text-align: center;
    display: flex;
    margin-bottom: 10px;
`
const DownArrow = styled.img`
    height: 40px;
    display: flex;
    margin-bottom: 50px;
    animation: animationDown 1.5s infinite;
    cursor: pointer;
`
const LeftButton = styled.div`
    background-color: rgba(23, 25, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;

    @media (min-width: 768px) {
        width: 200px;
        height: 30px;
        font-size: 10px;
    }

`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;    
    opacity: 0.65;
`