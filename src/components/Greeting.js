import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleChangeText = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello Michel!</h2>
      {changedText && <span>Changed!</span>}
      {!changedText && <span>Tell me something about yourself</span>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
};

export default Greeting;
