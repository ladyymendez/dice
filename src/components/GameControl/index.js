import React, { useState } from "react";

export default function GameControl({ add, placeholder }) {
  const [input, setInput] = useState("");
  return (
    <div className="flex items-center">
      <input
        className="w-28 text-black m-2 rounded px-4 py-2 outline-none"
        type="text"
        value={input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          setInput("");
          add(input);
        }}
        disabled={!input}
        className="focus:outline-none bg-primary rounded px-6 py-2"
      >
        Add
      </button>
    </div>
  );
}
