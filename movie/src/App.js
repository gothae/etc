import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/home" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}a/>
    </HashRouter>
  );
}

export default App;