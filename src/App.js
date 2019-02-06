import React, { useState } from 'react';
import { findLastIndex, times, constant, map } from 'underscore';
import { Button, Alert, Jumbotron, Form, Container, Row, Col, Lead, Display2, Display4 } from 'bootstrap-4-react';

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
    console.log(gameState)
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
    <Container py='5'>
      <Row mb='4'>
        <Col><Form.Input lg type='number' placeholder='Enter First Number' onChange={updateFirstInput} value={firstInput} /></Col>
        <Col><Form.Input lg type='number' placeholder='Enter Second Number' onChange={updateSecondInput} value={secondInput} /></Col>
        <Col><Button primary outline lg onClick={initHelper}>Make Easy 👍</Button></Col>
      </Row>
      { 
        toAddition &&
          <Alert info mb='4'>
            <Lead mb='0'>
              {
                map(toAddition, ((num, id) =>
                  <span key={id}>
                    { (findLastIndex(toAddition) === id) ? num : num + '+' }
                  </span>
                ))
              }
            </Lead>
          </Alert>
      }
      <Row>
        <Col><Form.Input lg type='number' placeholder='Enter Your Answer' onChange={updateThirdInput} value={gameState.userAnswer} /></Col>
        <Col><Button success lg onClick={setUserAnswer}>Check Answer 🙈</Button></Col>
      </Row>
      <div>
        { (!gameState.isCorrect && gameState.answerAttemps > 0) && <Alert danger mt='4'><Lead mb='0'>Incorrect</Lead></Alert> }
        {
          (!gameState.isCorrect && gameState.answerAttemps >= 3) 
            ? <Button warning outline lg onClick={displayAnswerGiveup}>Give Up 😞</Button>
            : ''
        }
        {
          (gameState.isCorrect || gameState.hasGiveup)
            ? 
              (gameState.isCorrect === true)
                ? 
                  <Jumbotron bg='success' text='center white' my='4'>
                    <Display2>Yes! The answer is {gameState.correctAnswer}! 🥳</Display2>
                  </Jumbotron>
                : <Jumbotron bg='seconday' text='center dark' my='4'>
                    <Display4>
                      <p>The answer is {gameState.correctAnswer}!</p> 
                      Better luck solving it next time! 🦂
                    </Display4>
                  </Jumbotron>
            : ''
        }
      </div>
      { (gameState.isCorrect || gameState.hasGiveup) && <Button danger outline lg onClick={resetGameState}>Reset 👈</Button> }
    </Container>
  );
};

export default App;