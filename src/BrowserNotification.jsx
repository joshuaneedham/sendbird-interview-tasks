import React, { Component } from 'react';
import 'sendbird-uikit/dist/index.css';

class BrowserNotifications extends Component {
	constructor(props) {
		super(props);
		this.showNotification = this.showNotifications.bind(this);
	}
	componentDidMount() {
		if (!('Notification' in window)) {
			console.log('This browser does not support desktop notifications');
		} else {
			Notification.requestPermission();
		}
	}

	showNotifications() {
		new Notification('Display SendBird SDK intercept here...');
	}

	render() {
		return (
			<div>
				<button onClick={this.showNotification}>
					Click to show Notification
				</button>
			</div>
		);
	}
}

export default BrowserNotifications;
