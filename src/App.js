import { App as SendbirdApp } from 'sendbird-uikit'
import 'sendbird-uikit/dist/index.css'
import WelcomeMessage from './WelcomeMessage.jsx'

import {
  APP_ID,
  USER_ID,
  NICKNAME
} from './const.js'

import './App.css';
function App() {

  if (Notification.permission === 'granted') {
    console.log(Notification.permission)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      console.log(permission)
    })
  }


  return (
    <div className="App">
      <WelcomeMessage />
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICKNAME} />
    </div>
  );
}

export default App;
