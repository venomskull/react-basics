import React, { useRef } from "react";
import Button from "./button";

// this hook is used to change the state of child component from parent.

function ImperativeHandleUse() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandleUse;