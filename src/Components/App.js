import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Exercises from '../Pages/Exercises';
import ExerciseNew from '../Pages/ExerciseNew';
import NotFound from '../Pages/404';

const App = props => (
	<Router>
		<Switch>
			<Route exact path='/exercise' component={Exercises} />
			<Route exact path='/exercise/new' component={ExerciseNew} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default App;
