import React from 'react';
import Wrapper from './components/Wrapper';
import { Provider } from 'react-redux';
import Store from './store';
import './App.css';


class App extends React.Component {


  render() {

    return (
      <Provider store={Store}>
        <Wrapper/>
      </Provider>
    );
  }
}
export default App;
