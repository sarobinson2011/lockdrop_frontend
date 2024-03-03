
import { ethers } from 'ethers';
import lockdropABI from './contracts/LockDrop.json';

const contractAddress = process.env.REACT_APP_LOCKDROP_ADDRESS;

export const sandboxHandler = async () => {

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, lockdropABI, signer);

    console.log('provider:', provider);
    console.log('signer:', signer);
    console.log('contractInstance:', contractInstance);

    // contractInstance.on("NewDeposit", (_user, _amount, _timestamp) => {
    //     console.log("NewDeposit event emitted:", { _user, _amount, _timestamp });
    // });

}

export default sandboxHandler;

