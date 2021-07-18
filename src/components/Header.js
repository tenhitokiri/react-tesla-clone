import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import react, { useState } from 'react'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    //close menu when clicking on the menu icon
    const handleClickMenu = () => setOpenMenu(!openMenu)

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
                    <div>Solar Panels</div>
                </MenuGroup>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Tesla Account</a>
                    <MenuIconContainer>
                        <MenuIcon 
                            onClick={() =>handleClickMenu()}
                        />
                    </MenuIconContainer>
                </RightMenu>
                <BurgerNav show={openMenu}>
                    <CloseContainer>
                        <Close onClick={() =>handleClickMenu()} />
                    </CloseContainer>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">CiberTruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Account</a></li>
                </BurgerNav>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    @media (max-width: 768px) {
        padding: 20px;
    }
`
const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div{
        font-weight: 600;
        padding: 0 20px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    a{
        font-weight: 600;
        text-transform: uppercase;
        align-items: center;
        padding-right: 10px;

    }
    @media (max-width: 768px) {
        padding-right: 40px;
    }
`
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 250px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    align-items: center;
    cursor: pointer;
    transform: ${props => props.show ? `translateX(0%)` : `translateX(100%)`}; 
    transition: transform 0.3s ease-in-out;
    li {
        padding: 12px;
        border-bottom: 1px solid #e0e0e0;
        a{
            font-weight: 600;
        }
    }
    @media (max-width: 768px) {
        padding-right: 40px;
    }
`
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(HighlightOffIcon)`
    cursor: pointer;
`