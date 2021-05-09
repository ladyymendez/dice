import React, { useState } from "react";

export default function Dice({ state, last, next, total }) {
  const [dices, setDices] = useState([...state.dices]);
  const [sum, setSum] = useState(0);

  const diceRoll = () => {
    let lastValues = Roll(state.lastValues);
    last(lastValues);
    amount(lastValues);
    setDices(lastValues);
    if (state.player === state.users.length - 1) {
      next("start");
    } else {
      next();
    }
  };

  const amount = (lastValues) => {
    let currentSum = lastValues.reduce((a, b) => a + b, 0);
    setSum(currentSum);

    const newSum = [...state.valueByUsers];
    let temp = state.player + 1;

    if (temp > state.users.length - 1) {
      temp = 0;
    }

    if (state.valueByUsers[temp] !== undefined) {
      newSum[temp] = newSum[temp] + currentSum;
    } else {
      newSum.push(currentSum);
    }

    total(newSum);
  };
  const Roll = (lastValues) =>
    state.dices.map((dice, i) => {
      let random = Math.floor(Math.random() * dice) + 1;
      if (lastValues.length > 1)
        while (lastValues[i] === random) {
          random = Math.floor(Math.random() * dice) + 1;
        }
      return random;
    });

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
        onClick={diceRoll}
        className="focus:outline-none px-4 py-1 border rounded"
      >
        Roll
      </button>
    </div>
  );
}
