import './App.css';
import Menu from './components/Menu.jsx';
import Content from './components/Content.jsx';
import store from './app/store';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="Main">
          <Switch>
            <Route path="/:owner">
              <Menu />
              <Route path="/:owner/:repo">
                <Content />
              </Route >
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
