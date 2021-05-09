import React, { useState } from "react";
import { connect } from "react-redux";
import Dice from "./components/Dice";
import GameControl from "./components/GameControl";
import * as actionCreator from "./store/actions";

function App({ state, addUser, addDice, lastValues, nextPlayer, totalPlayer }) {
  const [start, setStart] = useState(false);

  return (
    <div className="font-sans text-white">
      <div
        className="flex justify-center flex-col items-center min-h-screen"
        style={{ background: "linear-gradient(#325d70, #e66465)" }}
      >
        {!start ? (
          <>
            <div className="text-2xl my-4">Dados | Users</div>
            <div className="flex">
              <div>
                <GameControl add={addDice} placeholder="Caras" />
                {state.dices.map((dice, i) => (
                  <div key={i}>{dice}</div>
                ))}
              </div>
              <div>
                <GameControl add={addUser} placeholder="Nombre" />
                {state.users.map((dice, i) => (
                  <div key={i}>{dice}</div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setStart(true)}
              className="focus:outline-none px-4 py-1 border rounded my-6"
            >
              Start
            </button>
          </>
        ) : (
          <>
            <Dice
              state={state}
              last={lastValues}
              next={nextPlayer}
              total={totalPlayer}
            />
          </>
        )}
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return { state };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addUser: (name) => dispatch(actionCreator.add_user(name)),
    addDice: (number) => dispatch(actionCreator.add_dice(number)),
    lastValues: (data) => dispatch(actionCreator.last_values(data)),
    nextPlayer: (start) => dispatch(actionCreator.next_player(start)),
    totalPlayer: (total) => dispatch(actionCreator.total_player(total)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
