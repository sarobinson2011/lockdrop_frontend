import { useEffect, useState } from 'react';
import './App.css';
import DepositComponent from './DepositComponent';
import sandboxHandler from './Sandbox.js';
import WithdrawComponent from './WithdrawComponent';
// import { handleDepositEvents } from './depositEventListener';
// import { handleWithdrawEvents } from './withdrawEventListener';


function App() {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed");
      return;
    } else {
      console.log("Wallet exists... ready to go!");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    console.log('Contract address:', process.env.REACT_APP_LOCKDROP_ADDRESS);

    if (!ethereum) {
      alert("Please install Metamask");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Success, account found! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);

    } catch (err) {
      console.log(err)
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  // Render the connected wallet address in the top right corner
  const renderConnectedAddress = () => {
    return (
      <div style={{
        position: 'absolute',
        top: 10,
        right: 10,
        padding: '8px',
        backgroundColor: '#a39e9e',
        color: '#0d141c',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        {currentAccount ? `Connected wallet : ${currentAccount}` : 'Not connected'}
      </div>
    );
  };

  const SandboxButton = () => {
    return (
      <button onClick={sandboxHandler} className='cta-button sandbox-button'>
        Run Sandbox
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <div className='main-app'>
      <h1>Web3 front-end sandbox</h1>
      {renderConnectedAddress()}
      <div style={{ marginBottom: '10px' }}>
        {connectWalletButton()}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <DepositComponent /> {/* Use the DepositComponent */}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <WithdrawComponent /> {/* Use the WithdrawComponent */}
      </div>
      <div style={{ marginBottom: '10px' }}>
        {SandboxButton()}
      </div>
    </div>
  );
}

export default App;
