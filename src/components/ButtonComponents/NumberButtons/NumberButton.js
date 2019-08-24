import React from 'react';

const NumberButton = props => {
  const { number, setDisplayState } = props;

  const normalButtonClasses = `btn numbers-btn`;

  const numberDisplay = () => {
    setDisplayState(number);
  };
  return (
    <>
      <button onClick={numberDisplay} className={normalButtonClasses}>
        {number}
      </button>
    </>
  );
};
export default NumberButton;
