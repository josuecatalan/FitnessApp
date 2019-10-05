import React, { useState } from 'react';

import '../Components/Styles/ExerciceNew.css';
import ExerciseForm from '../Components/ExerciseForm';
import Card from '../Components/Card';

const ExerciceNew = props => {
	const [state, setState] = useState({
		form: {
			title: '',
			description: '',
			img: '',
			leftColor: '',
			rightColor: ''
		}
	});

	const handleChange = e => {
		setState({
			form: {
				...state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	return (
		<div className='ExerciseNew_Lateral_Spaces row'>
			<div className='col-sm ExerciseNew_Card_Space'>
				<Card {...state.form} />
			</div>
			<div className='col-sm ExerciseNew_Form_Space'>
				<ExerciseForm onChange={handleChange} form={state.form} />
			</div>
		</div>
	);
};

export default ExerciceNew;
