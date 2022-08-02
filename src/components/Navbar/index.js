import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavLogo, 
    NavbarContainer, 
    NavItem, 
    NavLinks, 
    MobileIcon, 
    NavMenu 
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Luke's <br></br>Giveaway
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                            <NavItem>
                                <NavLinks to='home'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='basket'>
                                    Basket
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='checkout'>
                                    Checkout
                                </NavLinks>
                            </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar