import { useState } from "react";

export const Increse_count = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("button clicked", count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};
