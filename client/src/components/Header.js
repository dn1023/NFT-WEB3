import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, deactivate, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      account ? deactivate() : activateBrowserWallet();
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet" onClick={handleWallet}>{account ? account : "Connect"}</button>
        </div>
      </div>
    );
}

export default Header;
