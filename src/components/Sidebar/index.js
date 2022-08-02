import React from 'react'
import {
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWapper
} from './sidebarElements'

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWapper>
            <SidebarMenu>
                <SidebarLink to='home'>
                    Home
                </SidebarLink>
                <SidebarLink to='basket'>
                    Basket
                </SidebarLink>
                <SidebarLink to='checkout'>
                    Checkout
                </SidebarLink>
            </SidebarMenu>
        </SidebarWapper>
    </SidebarContainer>
  )
}

export default Sidebar