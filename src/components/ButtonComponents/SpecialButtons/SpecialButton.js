import React from 'react';

const SpecialButton = (props) => {
	const { special } = props;
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button {(special === '0' ? null : `className="${btn}  ${specials - btn}"`)}>
				{special}
			</button>
		</>
	);
};
export default SpecialButton;
