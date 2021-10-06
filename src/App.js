import { App as SendbirdApp } from 'sendbird-uikit'
import 'sendbird-uikit/dist/index.css'

import './App.css';

function App() {
  const APP_ID = '19C7D50E-9C23-4401-803B-6A916CA0C317'
  const USER_ID = 'Joshua Needham'


  return (
    <div className="App">
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default App;
