import React, { Component } from 'react'
import { StylesSearch } from '../styles/StyleGlobal'

export default class Search extends Component {
  render() {
    return (
      <StylesSearch>
          <h2>Search for your area of interest</h2>
          <p>Please enter your desired industry, job title, and skills</p>
          <form>
              <input type="email" placeholder='engineer, Internet and Web Industry' />
              <button>Search</button>
          </form>
      </StylesSearch>
    )
  }
}
