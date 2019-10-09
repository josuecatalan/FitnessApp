import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ExercisesContainer from '../Pages/ExercisesContainer';
import ExerciseNewContainer from '../Pages/ExerciseNewContainer';
import NotFound from '../Pages/404';

const App = props => (
	<Router>
		<Switch>
			<Route exact path='/' component={ExercisesContainer} />
			<Route exact path='/exercise/new' component={ExerciseNewContainer} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default App;
