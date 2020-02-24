import React, { Component } from 'react';
import CatComponent from "./CatComponent";
import EinsteinQuoteComponent from "./GraceHopperQuoteComponent";
import MouseComponent from "./MouseComponent";

// const EinsteinQuoteComponent=GraceHopperQuoteComponent;

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
			
				<CatComponent />
				
				<EinsteinQuoteComponent />
				
				<MouseComponent />
				
			</div>
		);
	}
}

export default App;
