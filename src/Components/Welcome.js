import React from 'react';

import './Styles/Welcome.css';

const Welcome = ({ username }) => (
	<div className='container'>
		<div className='Fitness-User-Info'>
			<h1>Wellcome {username}!</h1>
			<p>Let´s workout to get someone gains!</p>
		</div>
	</div>
);

export default Welcome;
