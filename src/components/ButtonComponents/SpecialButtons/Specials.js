import React from 'react';

import SpecialButton from './SpecialButton';

const Specials = props => {
  // STEP 2 - add the imported data to state
  const { setDisplayState, specialsChars } = props;

  return (
    <div>
      {specialsChars.map((special, index) => {
        return (
          <SpecialButton
            special={special}
            key={index}
            setDisplayState={setDisplayState}
          />
        );
      })}
    </div>
  );
};

export default Specials;
