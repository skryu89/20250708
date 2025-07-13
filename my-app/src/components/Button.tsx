import React from 'react';

type ButtonProps = {
  handleClick: () => void;
  value: string;
};

const Button = React.memo(({ handleClick, value }: ButtonProps) => {
  console.log('Button child component', value);
  return <button onClick={handleClick}>{value}</button>;
});

export default Button;
