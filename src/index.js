import React from 'react';
import ReactDOM from 'react-dom';
import { APP_ID, USER_ID, NICKNAME } from './const';
import { SendBirdProvider } from 'sendbird-uikit';
import App from './App';

ReactDOM.render(
  <SendBirdProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
    <App />
  </SendBirdProvider>,
  document.getElementById('root')
);
