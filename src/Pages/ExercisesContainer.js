import React from 'react';

import Exercises from './Exercises';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import FatalError from './500';
import url from '../Config';

const ExercisesContainer = () => {
	const { data, loading, error } = useFetch(`${url}/exercises`);

	if (loading) return <Loading />;

	if (error) return <FatalError />;

	return <Exercises data={data} />;
};

export default ExercisesContainer;
