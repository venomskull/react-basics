import { useLayoutEffect, useEffect, useRef } from "react";

// useLayoutEffect() it is called at the early stage of page rendering 
// printing the value of component to the user

// useEffect is called after the page is rendered and everything is shown to the user. 
// it is very fast so that you could not differentiate this.

function LayoutEffectUse() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="DEEPAN" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectUse;
