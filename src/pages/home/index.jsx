import React, { useState } from 'react';
import Select from 'react-select';
import textToSpeechApi from '../../api/ttsApi';
import icConvert from '../../assets/ic_convert.png';

import './home.sass';

const options = [
  { value: 'english', label: 'English' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'chinese', label: 'Chinese' },
];

function Home() {
  const [text, setText] = useState('');

  const convert = async () => {
    const response = await textToSpeechApi(text, 'banmai');
    console.log(response);

    const audio = new Audio(response.data.async);
    audio.play();
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
        <h3 className="field__label">Language</h3>

        <Select
          isSearchable={false}
          defaultValue={{
            label: 'English',
            value: 'english',
          }}
          className="field__select"
          options={options}
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
