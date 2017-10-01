require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactRevSlider = require('react-rev-slider');

var _reactRevSlider2 = _interopRequireDefault(_reactRevSlider);

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			_reactRevSlider2['default'],
			{ config: config },
			React.createElement(
				_reactRevSlider.Slide,
				{
					src: 'https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg',
					alt: 'slidebg1',
					'data-bgfit': 'cover',
					'data-bgposition': 'left top',
					'data-bgrepeat': 'no-repeat',
					slideProperties: {
						'data-transition': "fade",
						'data-slotamount': "7",
						'data-masterspeed': "1500"
					}
				},
				React.createElement(
					_reactRevSlider.Caption,
					{
						'class': 'tp-caption skewfromrightshort fadeout',
						'data-x': '85',
						'data-y': '224',
						'data-speed': '500',
						'data-start': '1200',
						'data-easing': 'Power4.easeOut'
					},
					'This is a caption'
				)
			),
			React.createElement(
				_reactRevSlider.Slide,
				{
					src: 'https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg',
					alt: 'slidebg1',
					'data-bgfit': 'cover',
					'data-bgposition': 'left top',
					'data-bgrepeat': 'no-repeat',
					slideProperties: {
						'data-transition': "fade",
						'data-slotamount': "7",
						'data-masterspeed': "1500"
					}
				},
				React.createElement(
					_reactRevSlider.Caption,
					{
						'class': 'tp-caption skewfromrightshort fadeout',
						'data-x': '85',
						'data-y': '224',
						'data-speed': '500',
						'data-start': '1200',
						'data-easing': 'Power4.easeOut'
					},
					'This is a caption'
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
var config = {
	delay: 9000,
	startwidth: 1170,
	startheight: 500,
	hideThumbs: 10,
	fullWidth: "on",
	forceFullWidth: "on"
};

},{"react":undefined,"react-dom":undefined,"react-rev-slider":undefined}]},{},[1]);
