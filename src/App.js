import React, { Fragment, useState } from 'react';
import { findLastIndex, times, constant, map } from 'underscore';
import './App.css';

const App = () => {

  const GAME_STATE = { isCorrect: false, hasGiveup: false, answerAttemps: 0, correctAnswer: 0, userAnswer: '' };
  const [gameState, setGameState] = useState(GAME_STATE);
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [toAddition, setToAddition] = useState('');

  // setup the first/second input numbers
  const updateFirstInput = (e) => setFirstInput(e.target.value);
  const updateSecondInput = (e) => setSecondInput(e.target.value);

  // set correct answer
  const setCorrectAnswer = () => setGameState({
    ...gameState,
    correctAnswer: firstInput * secondInput
  });

  // setup addition show
  const setAddition = () => 
    (parseFloat(firstInput) > parseFloat(secondInput)) 
      ? setToAddition(times(secondInput, constant(firstInput))) 
      : setToAddition(times(firstInput, constant(secondInput)));

  // combine functions
  const initHelper = () => {
    setCorrectAnswer();
    setAddition();
  };

  // set third input numbers
  const updateThirdInput = (e) => {
    setGameState({
      ...gameState,
      userAnswer: e.target.value
    });
  }

  // set user answer
  const setUserAnswer = () => {
    setGameState({
      ...gameState,
      hasGiveup: false,
      isCorrect: (gameState.correctAnswer === parseFloat(gameState.userAnswer)) ? true : false,
      answerAttemps: (!gameState.isCorrect) ? gameState.answerAttemps + 1 : gameState.answerAttemps = 0
    });
  };

  // set give up status
  const displayAnswerGiveup = () => {
    setGameState({
      ...gameState,
      hasGiveup: true
    });
  };

  const resetGameState = () => {
    setGameState({
      ...GAME_STATE
    });
    setFirstInput('');
    setSecondInput('');
    setToAddition('');
  };

  return (
    <div className='wrap'>
      <input type='number' onChange={updateFirstInput} value={firstInput} />
      <input type='number' onChange={updateSecondInput} value={secondInput} />
      <div>
        <button onClick={initHelper}>Make Easy</button>
        <p>
          {
            (toAddition)
              ? map(toAddition, ((num, id) =>
                <span key={id}>
                  {
                    (findLastIndex(toAddition) === id)
                      ? num
                      : num + '+'
                  }
                </span>
              ))
              : ''
          }
        </p>
      </div>
      <div>
        <input type='number' onChange={updateThirdInput} value={gameState.userAnswer} />
        <button onClick={setUserAnswer}>Check Answer</button>
      </div>
      <Fragment>
        {
          (!gameState.isCorrect && gameState.answerAttemps >= 4) 
            ? <button onClick={displayAnswerGiveup}>Give Up :(</button>
            : ''
        }
        {
          (gameState.isCorrect || gameState.hasGiveup)
            ? <p>The answer is {gameState.correctAnswer}!</p>
            : ''
        }
      </Fragment>
      <div>
        <button onClick={resetGameState}>Reset</button>
      </div>
    </div>
  );
};

export default App;