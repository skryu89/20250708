import { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [firstCountState, setFirstCountState] = useState(0);
  const [secondCountState, setSecondCountState] = useState(10);

  const incrementFirstCounter = useCallback(() => {
    setFirstCountState(prev => prev + 1);
  }, []);

  const incrementSecondCounter = useCallback(() => {
    setSecondCountState(prev => prev + 10);
  }, []);

  return (
    <>
      <Title />
      <Count text="+ 1 ボタン" countState={firstCountState} />
      <Count text="+ 10 ボタン" countState={secondCountState} />
      <Button handleClick={incrementFirstCounter} value="+1 ボタン" />
      <Button handleClick={incrementSecondCounter} value="+10 ボタン" />
    </>
  );
};

export default Counter;
