import React, { Component } from 'react';
import CatComponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'
import MouseComponent from './MouseComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
class App extends Component { 
 
 
 
export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src= {'cat'} />
      </div>
    );
  }
}
