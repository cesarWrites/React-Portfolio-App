import React, { Component } from 'react';
import profile from './profile.jpg';
import './App.css';
import Blog from './blog';
import Contact from './contact';

class App extends Component {
   render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>
          Welcome <code>Sarah's</code> Portfolio
        </h1>
     
          Software Engineer
        <h3>Solving modern problems using technology.</h3>
      </header>
      <Blog/>
      <Contact/>
    </div>
  );
}
}

export default App;
