import { useState } from "react";

export const Input_form = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{input}</p>
    </div>
  );
};
