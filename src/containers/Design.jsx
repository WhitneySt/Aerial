import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { StylesDiv1, StylesDiv2, StylesDivHero, StylesFondo, StylesimgFondo } from '../styles/StyleGlobal'
import '../styles/style.css'
import InfoComponent from '../components/InfoComponent'
import Cards from '../components/Cards'
import Companies from '../components/Companies'
import Search from '../components/Search'
import FooterCards from '../components/FooterCards'


export default class Design extends Component {
  render() {
    return (
      <StylesFondo>
        <StylesDiv1>
          <Navbar />
          <StylesDivHero>
            <InfoComponent />
            <StylesimgFondo src="https://i.ibb.co/fCZR5YD/Vector1.png" alt="vectorfondo" />
            <Cards />
          </StylesDivHero>
        </StylesDiv1>
        <StylesDiv2>
          <Companies />
          <Search />
          <FooterCards />
        </StylesDiv2>
      </StylesFondo>

    )
  }
}

