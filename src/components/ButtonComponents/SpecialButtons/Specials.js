import React from 'react';

import SpecialButton from './SpecialButton';

const Specials = props => {
  // STEP 2 - add the imported data to state
  const { setDisplayState, specialsChars } = props;

  return (
    <div>
      {specialsChars.map((specialChar, index) => {
        return (
          <SpecialButton
            specialChar={specialChar} // character
            key={index}
            setDisplayState={setDisplayState}
          />
        );
      })}
    </div>
  );
};

export default Specials;
