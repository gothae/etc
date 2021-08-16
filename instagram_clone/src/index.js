import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
    <App />
  </FirebaseContext.Provider>
  
  , document.getElementById('root'));

// client side rendered app : react
//  DB -> Firebase
//  react-loading -> skeleton
//  tailwind

// 구조
// src
  // components, constants, context, helpers, hooks, pages
  // lib(firebase), services (firebase function)
  // styles (talwind's foleder)