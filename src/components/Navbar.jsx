import React, { Component } from 'react'
import { StylesBtn1, StylesBtn2, StylesDivFlex, StylesDivFlex2, StylesLogo, StylesNavbar, StylesUl } from '../styles/StyleGlobal'

export default class Navbar extends Component {
    render() {
        return (
            <StylesNavbar>
                <StylesLogo src="https://i.ibb.co/QCmj6cc/logo.png" alt="logo" />
                <StylesDivFlex>
                    <StylesUl>
                        <li>Job Search</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </StylesUl>
                    <StylesDivFlex2>
                        <StylesBtn1>Log in</StylesBtn1>
                        <StylesBtn2>Try it Free</StylesBtn2>
                    </StylesDivFlex2>
                </StylesDivFlex>
            </StylesNavbar>
        )
    }
}
