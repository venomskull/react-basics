import axios from "axios";
import { useEffect, useState, useMemo } from "react";

// to improve whole performance and be able to decrease latency on huge competitions 
// that you make throughout your application
// whenever a state changes re-rendering happens and the function inside that component 
// also re-renders. this function is not related to the state that is changing. hence it 
// affects the performance. so inorder to avoid this we use useMemo()
// here we needed to access value

export default function MemoUse() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);
//   const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}