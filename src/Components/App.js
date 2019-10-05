import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Exercices from '../Pages/Exercices';
import ExerciceNew from '../Pages/ExerciceNew';
import NotFound from '../Pages/404';

const App = props => (
	<Router>
		<Switch>
			<Route exact path='/exercise' component={Exercices} />
			<Route exact path='/exercise/new' component={ExerciceNew} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default App;
