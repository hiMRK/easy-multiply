import React, { useState } from 'react';
import { findLastIndex, times, constant, map } from 'underscore';
import Helper from './Helper';
import './app.scss';

const App = () => {

  const GAME_STATE = { isCorrect: false, hasGiveup: false, answerAttemps: 0, correctAnswer: 0, userAnswer: '' };
  const [gameState, setGameState] = useState(GAME_STATE);
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [toAddition, setToAddition] = useState('');
  const [helperState, setHelperState] = useState(false);

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
      answerAttemps: 0,
      hasGiveup: true
    });
  };

  // reset
  const resetGameState = () => {
    setGameState({
      ...GAME_STATE
    });
    setFirstInput('');
    setSecondInput('');
    setToAddition('');
  };

  // helper
  const showHelper = () => setHelperState(!helperState);

  return (
    <>
      <div className='hero'>
        <div className='container'>
          <h1 className='title title--h1'>Learn Multiplication the Easy Way</h1>
          <p className='para para--title'>A multiplication questions goes in, addition comes out</p>
          <button onClick={showHelper} className='btn btn--default'>Find out how!</button>
        </div>
      </div>
      <div className='app'>
        <div className='container'>
          <div className='flex space--mb'>
            <input type='number' placeholder='First Number' className='input' onChange={updateFirstInput} value={firstInput} />
            <input type='number' placeholder='Second Number' className='input' onChange={updateSecondInput} value={secondInput} />
            <button onClick={initHelper} className='btn btn--default'>Make Easy <span role='img' aria-label='Emoji-ThumpsUp'>👍</span></button>
          </div>
          { toAddition &&
            <>
              <div className='app__addition space--mb'>
                <p className='para para--title'>Solve this question with addition:</p>
                <div className='flex'>
                  {
                    map(toAddition, ((num, id) =>
                      <span key={id} className='addition__text para'>{ (findLastIndex(toAddition) === id) ? num : num + ' +' }</span>
                    ))
                  }
                </div>
              </div>
              <div className='app__answer space--mb'>
                  <div className='flex'>
                    <input type='number' placeholder='Your Answer' className='input' onChange={updateThirdInput} value={gameState.userAnswer} />
                    <button onClick={setUserAnswer} className='btn btn--success'>Check Answer <span role='img' aria-label='Emoji-HidingMonkey'>🙈</span></button>
                  </div>
              </div>
            </>
          }
          <div className='app__result'>
            <div className='result__wrong'>
              <div className='flex'>
                { (!gameState.isCorrect && gameState.answerAttemps >= 1) && <h2 className='title title--h2'>Incorrect... Keep Trying!</h2>}
                { (!gameState.isCorrect && gameState.answerAttemps >= 3) && <button onClick={displayAnswerGiveup} className='btn btn--wrong'>Give Up <span role='img' aria-label='Emoji-Sad' className='emoji'>😞</span></button> }
              </div>
            </div>
            <div className='result__correct'>
              { (gameState.isCorrect || gameState.hasGiveup) &&
                <>
                  <div className='corect__answer'>
                    { (gameState.isCorrect)  && <h2 className='title title--h2 title--success'><span role='img' aria-label='Emoji-PartyPopper' className='emoji emoji--flip'>🎉🎉</span> Yes! The answer is {gameState.correctAnswer}! <span role='img' aria-label='Emoji-PartyPopper'>🎉🎉</span></h2> }
                    { (!gameState.isCorrect)  && <h2 className='title title--h2'><p className='title--wrong'>The answer is {gameState.correctAnswer}!</p> Better luck solving it next time <span role='img' aria-label='Emoji-ThumbsUp' className='emoji'>👍</span></h2> }
                  </div>
                  <button onClick={resetGameState} className='btn btn--warning'>Reset <span role='img' aria-label='Emoji-FingerPointLeft'>👈</span></button> 
                </>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='helper' data-state={helperState ? 'helper--active' : 'helper--inactive'}>
        <Helper />
      </div>
    </>
  );
};

export default App;