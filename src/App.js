import React from 'react';
import logo from './book.svg';
import './App.css';
import MovieList from './MovieList';

function App() {



  return (
    <div className="App">
      <nav>
        <h1>
          <img alt="logo" src={logo} width="40" height="40"></img>
          <span>Books App</span>
        </h1>
      </nav>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
