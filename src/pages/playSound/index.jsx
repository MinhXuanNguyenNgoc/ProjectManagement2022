import React, { useState, useEffect } from 'react';
import './playSound.sass';
import { useLocation } from 'react-router-dom';

import ic_equalizer from '../../assets/ic_equalizer.png';
import ic_skipbackward from '../../assets/ic_skip-backward.png';
import ic_play from '../../assets/ic_play.png';

import ic_skipforward from '../../assets/ic_skip-forward.png';
import ic_volumn from '../../assets/ic_volumn.png';
import ic_download from '../../assets/ic_download.png';
import ic_soundwave from '../../assets/ic_soundwave.png';
import { saveAs } from 'file-saver';

const PlaySound = () => {
  const location = useLocation();

  const handleDownload =() =>{
    const username = localStorage.getItem("isLogin");
    if (username){
      saveAs(location.state.data.link)
    }
    else{
      alert("Please login to continue")
    }
    
  }
  const playAudio = () => {
    const audio = new Audio(location.state?.data?.link);

    audio.play().catch((e) =>
      setTimeout(() => {
        {
          playAudio();
        }
      }, 1000),
    );
  };

  useEffect(() => {
    playAudio();
  }, []);

  return (
    <div className="playSound">
      <div className="textBlock">
        <p className="textBlock__content">
          {location.state?.data.text}
        </p>
      </div>
      <div className="icons">
        <img
          className="icon equalizer"
          src={ic_equalizer}
          alt=""
        />
        <img
          className="icon backward"
          src={ic_skipbackward}
          alt=""
        />
        <img
          onClick={() => playAudio()}
          className="icon play"
          src={ic_play}
          alt=""
        />
        <img
          className="icon forward"
          src={ic_skipforward}
          alt=""
        />
        <img
          className="icon volumn"
          src={ic_volumn}
          alt=""
        />

          <img
            onClick={handleDownload}
            className="icon download"
            src={ic_download}
            alt=""
          />
      </div>
      <div className="soundWave">
        <img
          className="soundwave__play"
          src={ic_soundwave}
          alt=""
        />
      </div>
    </div>
  );
};

export default PlaySound;
