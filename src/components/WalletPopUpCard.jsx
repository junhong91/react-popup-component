import React, { useState } from "react";

import "./WalletPopUpCard.css";

const WalletPopUpCard = () => {
  const metaMaskIcon = "https://opensea.io/static/images/logos/metamask-fox.svg";

  const [isPopupVisible, setPopUpVisible] = useState(false);

  const handlePopUp = () => {
    setPopUpVisible(true);
  };
  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  const handleLoginMetaMask = () => {
    console.log("Test");
  };

  return (
    <>
      <div className="wrapper">
        <button className="popup__btn" onClick={handlePopUp}>
          OPEN POPUP
        </button>
        {isPopupVisible && (
          <div className="dimmed">
            <div className="wallet__card__container" onClick={handleClosePopUp}>
              <div className="wallet__card__title">
                <h2>지갑을 선택하세요</h2>
                <i className="fas fa-arrow-left fa-lg" onClick={handleClosePopUp}></i>
              </div>
              <ul className="wallet__menu">
                <li className="wallet__item" onClick={handleLoginMetaMask}>
                  <img height="30px" alt="" src={metaMaskIcon} />
                  <div className="wallet__item__title">Meta Mask</div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WalletPopUpCard;
