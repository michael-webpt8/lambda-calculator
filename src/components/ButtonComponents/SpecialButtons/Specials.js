import React from 'react';

import SpecialButton from './SpecialButton';

const Specials = props => {
  // STEP 2 - add the imported data to state
  const {
    setDisplayState,
    specialsChars,
    setSpecialsChars,
    setNumberChars
  } = props;

  return (
    <div>
      {specialsChars.map((specialChar, index) => {
        return (
          <SpecialButton
            specialChar={specialChar}
            key={index}
            setSpecialsChars={setSpecialsChars}
            setNumberChars={setNumberChars}
            setDisplayState={setDisplayState}
          />
        );
      })}
    </div>
  );
};

export default Specials;
