import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    FooterLink2,
    WebsiteBuilt,
    WebsiteRights,
    SocialMedia,
    SocialMediaWrap
} from './FooterElements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                       

                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Luke's</FooterLinkTitle>

                            
                            <FooterLink2>Infomation</FooterLink2>
                            <FooterLink to="/about">Contact Us</FooterLink>
                            <FooterLink to="/about">Terms & Conditions</FooterLink>
                           

                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Giveaway</FooterLinkTitle>

                            
                            <FooterLink to="/about">Privacy Policy</FooterLink>
                            <FooterLink to="/about">FAQ</FooterLink>
                            <FooterLink to="/about">Cookie Policy</FooterLink>
                            

                        </FooterLinkItems>
                        <FooterLinkItems>
                    

                        </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>Copyright © {new Date().getFullYear()} Luke's Giveaway.</WebsiteRights>
                        <WebsiteRights>Your ticket price is inclusive of VAT at 20%</WebsiteRights>
                        <WebsiteBuilt>Website Built by Luke Broadbent</WebsiteBuilt>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer