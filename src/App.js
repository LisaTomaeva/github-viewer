import './App.css';
import Menu from './components/Menu.jsx';
import Content from './components/Content.jsx';
import store from './app/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="Main">
        <Menu />
        <Content />
      </div>
    </Provider>
  );
}


export default App;
