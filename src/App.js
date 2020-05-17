import React, { Component } from 'react';
import CatComponent from "./CatComponent";
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent";
import mouseComponent from "./MouseComponent";

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<mouseComponent />
				{/* <hoverEffect /> */}
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
