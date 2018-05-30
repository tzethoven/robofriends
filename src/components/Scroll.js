import React from 'react';

const Scroll = (props) => {
	const scrollStyle = {
		overflowY: 'scroll',
	 	border: '1px solid black',
	 	height: '500px'
	};

	return (
		<div style={scrollStyle}>
			{props.children}
		</div>
	);
}

export default Scroll;