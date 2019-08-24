import React from 'react';

//import any components needed

//Import your array data to from the provided data file
import NumberButton from './NumberButton';

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const { setDisplayState, number } = props;
  const strToNums = number.map(numChar => {
    // converts string nums to numerical version.
    if (numChar !== '.') {
      return Number(numChar);
    }
    return numChar;
  });
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {strToNums.map((num, index) => {
        return (
          <NumberButton
            setDisplayState={setDisplayState}
            number={num}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Numbers;
