import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Dashboard from './pages/dashboard';
import ProjectPage from './pages/ProjectPage'
import MainNavigation from './shared/navigation/MainNavigation';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/project/:projectID" exact>
          <ProjectPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
