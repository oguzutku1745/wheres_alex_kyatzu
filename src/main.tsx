/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';
import iconImage from './assets/kyatzu.png'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where's the Eye?"
      dAppDescription='A friendly wager between friends'
      dAppUrl='https://spot-the-eye.vercel.app/'
      dAppIconURL={iconImage}
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
