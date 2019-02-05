import React, { Fragment, useState } from 'react';
import { findLastIndex, times, constant, map } from 'underscore';
import { Button, Navbar, Nav, BDiv, InputGroup, Form } from 'bootstrap-4-react';
import './App.scss';

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
    <Fragment>
      <Navbar expand='lg' bg='dark'>
        <Navbar.Nav>
          <Nav.ItemLink href='#' active>Home</Nav.ItemLink>
        </Navbar.Nav>
      </Navbar>
      <BDiv bg='dark' text='center white' p='5'>
        <input type='number' onChange={updateFirstInput} value={firstInput} />
        <input type='number' onChange={updateSecondInput} value={secondInput} />
        <div>
          <Button primary onClick={initHelper}>Make Easy</Button>
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
        <InputGroup>
          <Form.Input type='number' onChange={updateThirdInput} value={gameState.userAnswer} />
          <InputGroup.Append>
            <Button primary onClick={setUserAnswer}>Check Answer</Button>
          </InputGroup.Append>
        </InputGroup>
        <Fragment>
          {
            (!gameState.isCorrect && gameState.answerAttemps >= 4) 
              ? <Button warning onClick={displayAnswerGiveup}>Give Up 😞</Button>
              : ''
          }
          {
            (gameState.isCorrect || gameState.hasGiveup)
              ? <p>The answer is {gameState.correctAnswer}!</p>
              : ''
          }
        </Fragment>
        <div>
          <Button success onClick={resetGameState}>Reset 👈</Button>
        </div>
      </BDiv>
    </Fragment>
  );
};

export default App;