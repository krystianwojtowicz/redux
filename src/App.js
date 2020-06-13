import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

const initialStrongmen = {
  listName: 'Favourite',
  strongmen: [
    'Pudzian', 'Bjornsson', 'Licis'
  ]
}

function strongmen(state = initialStrongmen, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, strongmen: [...state.strongmen, action.movie]
      }
    case 'RESET':
      return {
        ...state, strongmen: []
      }
    default:
      return state
  }
}
const store = createStore(strongmen)
window.store = store


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
