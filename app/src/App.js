import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfPhantomIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana.isPhantom) {
        console.log('Connected to Phantom wallet');
        const resp = await window.solana.connect({ onlyIfTrusted: true });
        setWalletAddress(resp.publicKey.toString());
      } else {
        console.log(
          'Phantom wallet not found. Please connect to a Phantom wallet'
        );
      }
    } catch (e) {
      console.log('Error:', e);
      if (e.code === 4001 && e.message === 'User rejected the request.')
        window.alert(
          'An error occured. Make sure to login to Phantom.'
        );
    }
  };

  useEffect(() => {
    // Phantom Wallet team suggested doing this to ensure window is loaded up first
    const onLoad = async () => {
      await checkIfPhantomIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  const connectToPhantomWallet = async () => {
    const { solana } = window;

    if (solana.isPhantom) {
      console.log('Connected to Phantom wallet');
      const resp = await window.solana.connect({ onlyIfTrusted: true });
      console.log('Connect with public key: ', resp.publicKey.toString());
      setWalletAddress(resp.publicKey.toString());
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='header-container'>
          <p className='header'>🍭 Candy Drop</p>
          <p className='sub-text'>NFT drop machine with fair mint</p>
          {!walletAddress && (
            <button
              className='cta-button connect-wallet-button'
              onClick={connectToPhantomWallet}
            >
              Connect to Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
