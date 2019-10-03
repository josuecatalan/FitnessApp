import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/AddButton.css';
import AddImg from '../Images/add.png';

const AddButton = props => (
	<Link to='/exercise/new'>
		<img src={AddImg} className='Fitness-Add' alt='exercise' />
	</Link>
);

export default AddButton;
