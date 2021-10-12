import React from 'react';
import { withSendBird, sendBirdSelectors } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

export default function WelcomeMessage() {
	const Welcome = ({ currentUser }) => (
		<div>{`Hello, ${currentUser || 'stranger'}`}</div>
	);

	const WelcomeWithSendBird = withSendBird(Welcome, (state) => {
		const sdk = sendBirdSelectors.getSdk(state);
		const currentUser = sdk && sdk.getCurrentUserId && sdk.getCurrentUserId();
		return { currentUser };
	});

	return (
		<div>
			<h2>
				<WelcomeWithSendBird />
			</h2>
		</div>
	);
}
