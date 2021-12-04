import React, { useEffect } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const checkIfPhantomIsConnected = () => {
    const { solana } = window;
    
    if (solana.isPhantom) {
      console.log('Connected to Phantom wallet');
    } else {
      console.log(
        'Phantom wallet not found. Please connect to a Phantom wallet'
      );
    }
  };

  useEffect(() => {
    checkIfPhantomIsConnected();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <div className='header-container'>
          <p className='header'>🍭 Candy Drop</p>
          <p className='sub-text'>NFT drop machine with fair mint</p>
        </div>
      </div>
    </div>
  );
};

export default App;
