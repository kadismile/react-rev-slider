var React = require('react');
var ReactDOM = require('react-dom');
import RevSlider, { Slide, Caption } from 'react-rev-slider';

var App = React.createClass({
	render () {
		return (
			<RevSlider config={config}>
			<Slide
				src="https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg"
				alt="slidebg1"
				bgfit="cover"
				bgposition="left top"
				bgrepeat="no-repeat"
				slideProperties={{
					transition: "fade",
					slotamount: "7",
					masterspeed: "1500"
				}}
			>   
				<Caption
					class="tp-caption skewfromrightshort fadeout"
					data-x="85"
					data-y="224"
					data-speed="500"
					data-start="1200"
					data-easing="Power4.easeOut"
				>
					This is a caption
				</Caption>
			</Slide>
			<Slide
				src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg"
				alt="slidebg1"
				bgfit="cover"
				bgposition="left top"
				bgrepeat="no-repeat"
				slideProperties={{
					transition: "fade",
					slotamount: "7",
					masterspeed: "1500"
				 }}
			>   
				<Caption
					class="tp-caption skewfromrightshort fadeout"
					x="85"
					y="224"
					speed="500"
					start="1200"
					easing="Power4.easeOut"
				>This is a caption</Caption>
			</Slide>
		</RevSlider>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
const config = {
    delay:9000,
    startwidth:1170,
    startheight:500,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
};