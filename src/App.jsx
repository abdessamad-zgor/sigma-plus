import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import context
import { UserContextProvider } from './context';

//import styles
import './styles/index.scss';

//import pages
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Auth from './pages/Auth';
import StudyOverview from './pages/StudyOverview';
import StudyRoom from './pages/StudyRoom';

function App() {
	return (
		<div id="app">
			<UserContextProvider>
				<Router>
					<Switch>
						<Route path="/overview" component={StudyOverview} />
						<Route path="/curriculums" component={Curriculum} />
						<Route path="/curriculums/:subject" component={Curriculum} />
						<Route path="/room/:id" component={StudyRoom} />
						<Route path="/auth" component={Auth} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</UserContextProvider>
		</div>
	);
}

export default App;
