
import { ethers } from 'ethers';
// import './Sandbox.css';
import lockdropABI from './contracts/LockDrop.json';

const contractAddress = process.env.REACT_APP_LOCKDROP_ADDRESS;

export const sandboxHandler = async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, lockdropABI, signer);

    console.log('provider:', provider);
    console.log('signer:', signer);
    console.log('contractInstance:', contractInstance);

}

<button onClick={sandboxHandler} className='cta-button connect-wallet-button'>
    Run Sandbox
</button>

export default sandboxHandler;

