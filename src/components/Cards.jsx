import React, { Component } from 'react'
import { StylesCard, StylesDivCards } from '../styles/StyleGlobal'

export default class Cards extends Component {
  render() {
    return (
      <StylesDivCards>
          <StylesCard>
             <img src="https://i.ibb.co/HY1nd7P/person1.png" alt="Felicity" /> 
             <h2>Felicity Belle Amis</h2>
             <span>Work Joe</span>
             <p>Leave it to us to change jobs for designers!</p>
          </StylesCard>
          <StylesCard>
             <img src="https://i.ibb.co/0MgJcKH/person2.png" alt="Thelma" /> 
             <h2>Thelma Nicks</h2>
             <span>Career Tweak</span>
             <p>We have a marketer position for you.</p>
          </StylesCard>
          <StylesCard>
             <img src="https://i.ibb.co/3v1dD5L/person3.png" alt="Arman" /> 
             <h2>Arman Weight</h2>
             <span>rjob</span>
             <p>I specialize in helping engineers change jobs.</p>
          </StylesCard>
          <StylesCard>
             <img src="https://i.ibb.co/DtWpFgZ/person4.png" alt="Arman" /> 
             <h2>Arman Weight</h2>
             <span>HIGHREACH</span>
             <p>I can help you with the medical industry.</p>
          </StylesCard>
          <StylesCard>
             <img src="https://i.ibb.co/nn0j0Dw/person5.png" alt="Earl" /> 
             <h2>Earl Dunst</h2>
             <span>housy</span>
             <p>We have a number of CTO positions available.</p>
          </StylesCard>
          <StylesCard>
             <img src="https://i.ibb.co/sVw3X0X/person6.png" alt="Ludovic" /> 
             <h2>Ludovic Dane</h2>
             <span>SHIF GUYS</span>
             <p>We specialize in construction related jobs.</p>
          </StylesCard>
      </StylesDivCards>
    )
  }
}
