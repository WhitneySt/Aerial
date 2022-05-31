import React, { Component } from 'react'
import { StylesFCard, StylesFooter } from '../styles/StyleGlobal'

export default class FooterCards extends Component {
  render() {
    return (
      <StylesFooter>
          <StylesFCard>
              <p>Leader of iOS engineers for mobility services</p>
              <div>
                  <span><img src="https://i.ibb.co/BtPyXKB/Vectorubi.png" alt="location" />California</span>
                  <span><img src="https://i.ibb.co/XZRrGrG/Vector-Rol.png" alt="rol" />Engineer</span>
              </div>
          </StylesFCard>
          <StylesFCard>
              <p>Candidate for Sales Manager of HR-related services</p>
              <div>
                  <span><img src="https://i.ibb.co/BtPyXKB/Vectorubi.png" alt="location" />Oregon</span>
                  <span><img src="https://i.ibb.co/XZRrGrG/Vector-Rol.png" alt="rol" />Sales Manager</span>
              </div>
          </StylesFCard>
          <StylesFCard>
              <p>Head of marketing for electronic payment services</p>
              <div>
                  <span><img src="https://i.ibb.co/BtPyXKB/Vectorubi.png" alt="location" />Florida</span>
                  <span><img src="https://i.ibb.co/XZRrGrG/Vector-Rol.png" alt="rol" />Marketer</span>
              </div>
          </StylesFCard>
          <StylesFCard>
              <p>CFO of a semiconductor manufacturing company</p>
              <div>
                  <span><img src="https://i.ibb.co/BtPyXKB/Vectorubi.png" alt="location" />Texas</span>
                  <span><img src="https://i.ibb.co/XZRrGrG/Vector-Rol.png" alt="rol" />CFO</span>
              </div>
          </StylesFCard>
      </StylesFooter>
    )
  }
}
