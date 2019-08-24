import React from 'react';

const SpecialButton = props => {
  const { specialChar, displaySpecialChar, setDisplayState } = props;

  const specialCharSet = () => {
    if (specialChar === 'C') {
      setDisplayState(0);
    } else if (specialChar === '+/-') {
      console.log(`clicked abs`);
    } else {
      console.log('other');
    }
  };

  const specialBaseClass = `btn specials-btn`;
  return (
    <>
      <button onClick={specialCharSet} className={specialBaseClass}>
        {specialChar}
      </button>
    </>
  );
};
export default SpecialButton;
