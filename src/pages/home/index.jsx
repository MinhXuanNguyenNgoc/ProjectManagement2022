import React, { useState } from 'react';
import Select from 'react-select';
import textToSpeechApi from '../../api/ttsApi';
import icConvert from '../../assets/ic_convert.png';

import './home.sass';

const voiceOptions = [
  { value: 'north', label: 'North' },
  { value: 'central', label: 'Central' },
  { value: 'south', label: 'South' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

function Home() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState(voiceOptions[0]);
  const [gender, setGender] = useState(genderOptions[1]);

  const handleVoice = () => {
    let voiceName = '';
    if (gender.value == 'male') {
      if (voice.value == 'central') {
        voiceName = 'giahuy';
      }

      if (voice.value == 'south') {
        voiceName = 'minhquang';
      }

      if (voice.value == 'north') {
        voiceName = 'leminh';
      }
    } else {

      if (voice.value == 'central') {
        voiceName = 'myan';
      }

      if (voice.value == 'south') {
        voiceName = 'linhsan';
      }

      if (voice.value == 'north') {
        voiceName = 'banmai';
      }
    }
    return voiceName;
  };

  const convert = async () => {
    const requestVoice = handleVoice();
    const response = await textToSpeechApi(
      text,
      requestVoice,
    );

    const audio = new Audio(response.data.async);
    audio.play().then((res) => {
      console.log('eehehhee');
    });
  };
  return (
    <div className="container">
      <div className="field">
        <h3 className="field__label">Text</h3>
        <textarea
          rows="6"
          className="field__textarea"
          name="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="field">
        <h3 className="field__label">Accent</h3>

        <Select
          isSearchable={false}
          className="field__select"
          options={voiceOptions}
          value={voice}
          onChange={setVoice}
        />

        <h3 className="field__label">Gender</h3>
        <Select
          isSearchable={false}
          className="field__select"
          options={genderOptions}
          value={gender}
          onChange={setGender}
        />
      </div>

      <button className="submit" onClick={convert}>
        <img
          className="submit__icon"
          src={icConvert}
          alt="Covert icon"
        />
        <p className="submit__text">Convert</p>
      </button>
    </div>
  );
}

export default Home;
