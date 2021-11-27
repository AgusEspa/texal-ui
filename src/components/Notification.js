import React from 'react';

const Notification = ({message}) => {

	if (message === null) return null;

	const spanStyle = {
		color: 'green',
		background: 'lightgrey',
  		fontSize: 16,
  		borderStyle: 'solid',
  		borderRadius: 5,
  		padding: 10,
  		marginBottom: 10
	}

	return (
		<div style={spanStyle}>{message}</div>
	)
}

export default Notification;