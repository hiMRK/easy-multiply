import React from 'react';

const Helper = () => {
  // to do: solution for repeated classes
  return (
    <>
      <ol className='helper__list'>
        <li className='para'>Enter the two numbers you want to multiply</li>
        <li className='para'>Figure out the answer</li>
        <li className='para'>Enter your answer</li>
      </ol>
      <p className='para'>If you are correct then great! You can reset the app.</p>
      <p className='para'>Even if you are wrong it's not over, you can keep guessing or reveal the answer with the 'Give Up' button, but hopefully you keep trying.</p>
    </>
  )
}

export default Helper;