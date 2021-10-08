import { App as SendbirdApp } from 'sendbird-uikit'
import { useState, useEffect } from 'react'
import 'sendbird-uikit/dist/index.css'

import './App.css';
function App() {
  const [webHooks] = useState(null)
  const APP_ID = '19C7D50E-9C23-4401-803B-6A916CA0C317'
  const USER_ID = 'Joshua Needham'

  // useEffect(() => {
  //   const webHooks = {
  //     method: 'PUT',
  //     headers: {
  //       'user-agent': 'SendBird',
  //       'Content-Type': 'application/json',
  //       'x-signature': '{ x-signature }'
  //     }
  //   }

  //   fetch('https://api-19C7D50E-9C23-4401-803B-6A916CA0C317.sendbird.com/v3/applications/settings/webhook', webHooks)
  //     .then(response => response.json())
  //     .then(data => console.log('Webhooks fetch response', data))
  // }, [])

  // if (Notification.permission === 'granted') {
  //   console.log(Notification.permission)
  // } else if (Notification.permission !== 'denied') {
  //   Notification.requestPermission().then(permission => {
  //     console.log(permission)
  //   })
  // }


  return (
    <div className="App">
      {webHooks}
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default App;
