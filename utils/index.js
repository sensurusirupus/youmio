import { ethers } from 'ethers';
import Youmio from './Youmio.json';

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      '0x0C4361c038696dB4e2A28367689e60eE6F8F94FB',
      Youmio.abi,
      signer,
    );

    return contractReader;
  }
};
