import React from 'react';
import { useHistory } from 'react-router-dom';
import './IconButtons.scss'; 

const imagePaths = {
  treehouse: './treehouse.png',
  lakefront: './mountain.png',
  cabins: './cabin.png',
  castles: '/castle.png', 
  downtown: './downtown.png',
  amazingviews: './view.png',
  ski: './ski.png',
  houseboats: './houseboats.png', 
  tinyhomes: './cabin.png', 
  farms: './farms.png'
};

const IconButtons = () => {
  const history = useHistory();

  const handleTreeHouseClick = () => {
  };

  const handleLakefrontClick = () => {
  };

  const handleCabinsClick = () => {
  };

  const handleCastlesClick = () => {
  };

  const handleDowntownClick = () => {
  };

  const handleAmazingViewsClick = () => {
  };

  const handleSkiClick = () => {
  };

  const handleHouseboatsClick = () => {
  };

  const handleTinyHomesClick = () => {
  };

  const handleFarmsClick = () => {
  };

  const getImageElement = (imageName) => {
    const imagePath = imagePaths[imageName.toLowerCase()];
    if (imagePath) {
      return <img src={imagePath} alt={`${imageName} Icon`} />;
    } else {
      return null; 
    }
  };

  return (
    <div className="icon-buttons">
      <button className="icon-button" onClick={handleTreeHouseClick}>
        <div className="icon-button-content">
          {getImageElement('TreeHouse')}
          <div className="button-label">Tree House</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleLakefrontClick}>
        <div className="icon-button-content">
          {getImageElement('Lakefront')}
          <div className="button-label">Lakefront</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleCabinsClick}>
        <div className="icon-button-content">
          {getImageElement('Cabins')}
          <div className="button-label">Cabins</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleCastlesClick}>
        <div className="icon-button-content">
          {getImageElement('Castles')}
          <div className="button-label">Castles</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleDowntownClick}>
        <div className="icon-button-content">
          {getImageElement('Downtown')}
          <div className="button-label">Downtown</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleAmazingViewsClick}>
        <div className="icon-button-content">
          {getImageElement('AmazingViews')}
          <div className="button-label">Amazing Views</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleSkiClick}>
        <div className="icon-button-content">
          {getImageElement('Ski')}
          <div className="button-label">Ski</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleHouseboatsClick}>
        <div className="icon-button-content">
          {getImageElement('Houseboats')}
          <div className="button-label">House Boats</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleTinyHomesClick}>
        <div className="icon-button-content">
          {getImageElement('TinyHomes')}
          <div className="button-label">Tiny Homes</div>
        </div>
      </button>
      <button className="icon-button" onClick={handleFarmsClick}>
        <div className="icon-button-content">
          {getImageElement('Farms')}
          <div className="button-label">Farms</div>
        </div>
      </button>
    </div>
  );
};

export default IconButtons;