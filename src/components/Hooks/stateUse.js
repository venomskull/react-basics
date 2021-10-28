import React, { useState } from "react";

const StateUse = () => {
    const [inputValue, setInputValue] = useState("Deepan");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

 
export default StateUse;