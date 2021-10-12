import React, { useEffect } from 'react';
import { sendBirdSelectors, withSendBird } from 'sendbird-uikit';

const CustomComponent = (props) => {
	const { sdk } = props;
	useEffect(() => {
		var ChannelHandler = new sdk.ChannelHandler();
		ChannelHandler.onMessageReceived = function (channel, message) {
			// your custom logic
		};
		sdk.addChannelHandler(/*UNIQUE_HANDLER_ID,*/ ChannelHandler);
		return () => {
			// cleanup
			sdk.removeChannelHandler(/*UNIQUE_HANDLER_ID*/);
		};
	}, [sdk]);
	return <div />;
};

const mapStoreToProps = (store) => {
	const sdk = sendBirdSelectors.getSdk(store);
	return {
		sdk,
	};
};

export default withSendBird(CustomComponent, mapStoreToProps);
