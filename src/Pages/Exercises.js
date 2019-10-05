import React, { Fragment } from 'react';
import Welcome from '../Components/Welcome';
import ExerciseList from '../Components/ExerciseList';
import AddButton from '../Components/AddButton';

const Exercises = ({ data }) => (
	<Fragment>
		<Welcome username='Josh' />
		<ExerciseList exercises={data} />
		<AddButton />
	</Fragment>
);

export default Exercises;
