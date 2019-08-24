import React from 'react';

import OperatorButton from './OperatorButton';

const Operators = props => {
  const { setDisplayState, operationChars } = props;
  return (
    <div>
      {operationChars.map((operator, index) => {
        return (
          <OperatorButton
            setDisplayState={setDisplayState}
            operator={operator.char}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Operators;
