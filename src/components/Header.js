import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
            <Container>
                <a href="/">
                    <img src="./images/logo.svg" alt="logo"/>
                </a>
                <MenuGroup>
                    <div>Model S</div>
                    <div>Model 3</div>
                    <div>Model X</div>
                    <div>Model Y</div>
                    <div>Solar Roof</div>
                    <div>Solar Pannels</div>
                </MenuGroup>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                </RightMenu>
            </Container>

        </div>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`
const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight: 600;
        padding: 0 20px;
        cursor: pointer;
    }

`
const RightMenu = styled.div`
    display: flex;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;

    }
`