import React, { useState, useEffect } from 'react';

import Welcome from '../Components/Welcome';
import ExerciseList from '../Components/ExerciseList';
import AddButton from '../Components/AddButton';
import Loading from '../Components/Loading';
import FatalError from './500';

const Exercises = props => {
	const [state, setState] = useState({
		data: [],
		loading: true,
		error: null
	});

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
				let res = await fetch('http://localhost:4000/api/exercises');
				let data = await res.json();

				setState({
					data,
					loading: false
				});
			} catch (error) {
				setState({
					loading: false,
					error
				});
			}
		}

		fetchData();

		return function cleanUp() {
			abortController.abort();
		};
	}, []);

	if (state.loading) {
		return <Loading />;
	}

	if (state.error) {
		return <FatalError />;
	}

	return (
		<div className='container'>
			<Welcome username='Josh' />
			<ExerciseList exercises={state.data} />
			<AddButton />
		</div>
	);
};

export default Exercises;
