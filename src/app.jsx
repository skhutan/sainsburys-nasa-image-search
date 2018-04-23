import React from 'react';
import HomePage from './components/HomePage';
import 'normalize.css';

import "styles/base/_main.sass";  // Global styles
import "styles/base/_common.sass";  // Global styles

const App = () => (
  <div className='App'>
    <HomePage/>
  </div>
);

export default App;
