import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleChangeText = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello Michel!</h2>
      {changedText && <Output>Changed!</Output>}
      {!changedText && <Output>Tell me something about yourself</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
};

export default Greeting;
