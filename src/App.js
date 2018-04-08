import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/store'

import NavBar from './containers/navBar'
import BookShelf from './containers/bookShelf'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <BookShelf />
        </div>
      </Provider>
    );
  }
}

export default App;
