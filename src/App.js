import React, { useState } from 'react';
import { findLastIndex, times, constant, map } from 'underscore';
import './app.scss';

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
  const setAddition = () => {
    (parseFloat(firstInput) > parseFloat(secondInput)) 
      ? setToAddition(times(secondInput, constant(firstInput))) 
      : setToAddition(times(firstInput, constant(secondInput)));
    if(gameState.isCorrect) setGameState({
      ...GAME_STATE,
      correctAnswer: firstInput * secondInput
    });
  };

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
    <>
      <div className='hero'>
        <div className='container'>
          <h1 className='title title__h1'>Learn Multiplication the Easy Way</h1>
          <p class='para para__title'>A multiplication questions goes in, addition comes out</p>
          <button className='btn btn--default'>Find out how!</button>
        </div>
      </div>
      <div className='app'>
        <div className='container'>
          <div className='flex flex--mb'>
            <input type='number' placeholder='First Number' className='input' onChange={updateFirstInput} value={firstInput} />
            <input type='number' placeholder='Second Number' className='input' onChange={updateSecondInput} value={secondInput} />
            <button onClick={initHelper} className='btn btn--default'>Make Easy <span role='img' aria-label='Emoji-ThumpsUp'>👍</span></button>
          </div>
          { 
            toAddition &&
              <div>
                <p>
                  {
                    map(toAddition, ((num, id) =>
                      <span key={id}>
                        { (findLastIndex(toAddition) === id) ? num : num + '+' }
                      </span>
                    ))
                  }
                </p>
              </div>
          }
          <div>
            <input type='number' placeholder='Enter Your Answer' onChange={updateThirdInput} value={gameState.userAnswer} />
            <button onClick={setUserAnswer}>Check Answer <span role='img' aria-label='Emoji-HidingMonkey'>🙈</span></button>
          </div>
          <div>
            { (!gameState.isCorrect && gameState.answerAttemps > 0) && <div><p>Incorrect</p></div> }
            {
              (!gameState.isCorrect && gameState.answerAttemps >= 3) 
                ? <button onClick={displayAnswerGiveup}>Give Up <span role='img' aria-label='Emoji-Sad'>😞</span></button>
                : ''
            }
            {
              (gameState.isCorrect || gameState.hasGiveup)
                ? 
                  (gameState.isCorrect === true)
                    ? 
                      <div>
                        <h2>Yes! The answer is {gameState.correctAnswer}! <span role='img' aria-label='Emoji-StarFace'>🤩</span></h2>
                      </div>
                    : <div>
                        <h3>
                          <p>The answer is {gameState.correctAnswer}!</p> 
                          <p>Better luck solving it next time! <span role='img' aria-label='Emoji-Scorpion'>🦂</span></p>
                        </h3>
                      </div>
                : ''
            }
          </div>
          { 
            (gameState.isCorrect || gameState.hasGiveup) && 
            <button onClick={resetGameState}>Reset <span role='img' aria-label='Emoji-FingerPointLeft'>👈</span></button> 
          }
        </div>
      </div>
    </>
  );
};

export default App;