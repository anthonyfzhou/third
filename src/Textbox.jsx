import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["wow you just benched like 10000 plates that's crazy",
				"arnold schwarzenegger would be proud",
				"leaving vaib and shaylan ooga booga-ing behind, you enter the next room",
				"inside you see jennifer xiao just turbo sad",
				"you remember that kakao M recently took down a bunch of kpop songs, so that could be it",
				"or it could be that she's crying tears of happiness now that bobby shmurda's released",
				"regardless, it doesn't seem like you'll be able to move on without answering some form of arbitrary puzzle",
				"unfortunately jenn is giving you any hints so you're gonna have to piece this one together by yourself",
				"however, you do see she has the 5th song of some playlist on permanent repeat, perhaps she's coping?",
				"In addition, you see some RANDOM ROCKS on the floor, and you make a mental note of that, maybe it's important",
				"you suspect the answer has something to do with jenn's music, but where could she be listening from?",
				"in any case, you feel that can't just be it, anthony must have put some incredibly arbitrary convuluted step",
				"and you're right!!",
				"looking at the rocks now, you see that there actually 256 HASH browns scattered around! wow! how did you miss this the first time??"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 14,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index == 4) {
			return <div className="content">
						<img className="jen" src={require('./jeniu.png').default} />
					</div>;
		}
		if (this.state.index == 5) {
			return <div className="content">
						<img className="jen" src={require('./jenbobby.png').default} />
					</div>;
		}
		if (this.state.index >= 6) {
			return <div className="content">
					     <img className="jen" src={require('./jenhash.png').default} />
					   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;
