import React, { useState } from "react";
import Select from "react-select";
import icConvert from "../../assets/ic_convert.png";

import "./home.sass";

const options = [
  { value: "english", label: "English" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "spanish", label: "Spanish" },
  { value: "chinese", label: "Chinese" },
];
function Home() {
  const [test, setText] = useState("");

  return (
    <div className="container">
      <div className="field">
        <h3 className="field__label">Text</h3>
        <input
          placeholder="Enter your text"
          className="field__input"
          name="text"
        />
      </div>

      <div className="field">
        <h3 className="field__label">Language</h3>

        <Select
          isSearchable={false}
          defaultValue={{ label: "English", value: "english" }}
          className="field__select"
          options={options}
        />
      </div>

      <button className="submit">
        <img className="submit__icon" src={icConvert} alt="Covert icon" />
        <p className="submit__text">Covert</p>
      </button>
    </div>
  );
}

export default Home;
