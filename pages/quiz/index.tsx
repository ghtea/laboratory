import type { NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const QuizPage: NextPage = () => {
  const [value, setValue] = useState(0);

  const logValueOne = useCallback(() => {
    console.log(value);
  }, []);

  const logValueTwo = useCallback(() => {
    console.log(value);
  }, [value]);

  const handleClick = () => {
    setValue(value + 1);
    logValueOne();
    logValueTwo();
  };

  return <button onClick={handleClick}>CLICK ME</button>;
};

export default QuizPage