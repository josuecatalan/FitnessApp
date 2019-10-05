import React from 'react';
import '../Components/Styles/Errors.css';
import FatalErrorImg from '../Images/500.png';

const FatalError = props => (
	<div className='text-center'>
		<h1 className='Error_Text'>Error: 500 Page Unexpected Error</h1>
		<img src={FatalErrorImg} alt='500 FatalError' className='Error_Image' />
	</div>
);

export default FatalError;
