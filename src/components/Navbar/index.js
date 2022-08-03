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
import {Link} from 'react-router-dom'
import '../../App.css'



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
                                <NavLinks to='home'><Link className='links' to='/'>
                                    Home
                                    </Link>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="checkout"><Link className='links' to='/checkout'>
                                    Checkout
                                    </Link></NavLinks>
                            </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar