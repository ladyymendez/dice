import React, { useState } from "react";

export default function Dice({ state, last, next, total }) {
  const [dices, setDices] = useState([]);
  const [sum, setSum] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap max-w-lg justify-center">
        {dices.map((dice, i) => (
          <div key={i} className="py-6 px-8 border my-6 mx-3">
            {dice}
          </div>
        ))}
      </div>
      <div>
        Total: {state.valueByUsers[state.player] - sum || 0} + {sum} ={" "}
        {state.valueByUsers[state.player]}
      </div>
      <div className="mb-6">User: {state.users[state.player]}</div>
      <button
        // onClick={diceRoll}
        className="focus:outline-none px-4 py-1 border rounded"
      >
        Roll
      </button>
    </div>
  );
}
