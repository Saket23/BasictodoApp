import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Main from './components/App';


class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
        <Provider store = {store}>
            <Main />
          </Provider>
    );
  }
}

export default App;
