import React, { useState } from 'react';

//import any components needed
import { numbers } from '../../../data';
//Import your array data to from the provided data file
import NumberButton from './NumberButton';

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const { setDisplayState, numberChars } = props;

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberChars.map((number, index) => {
        return (
          <NumberButton
            setDisplayState={setDisplayState}
            number={number}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Numbers;
