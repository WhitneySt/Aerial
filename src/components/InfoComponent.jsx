import React, { Component } from 'react'
import { StylesBtn1, StylesBtn2, StylesDivBtns, Stylesh1, StylespInfo } from '../styles/StyleGlobal'

export default class InfoComponent extends Component {
    render() {
        return (
            <div>
                <Stylesh1>We support your challenge in new areas.</Stylesh1>
                <StylespInfo>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</StylespInfo>
                <StylesDivBtns>
                <StylesBtn2>Try it Free</StylesBtn2>
                <StylesBtn1>Explore</StylesBtn1>
                </StylesDivBtns>
            </div>
        )
    }
}
