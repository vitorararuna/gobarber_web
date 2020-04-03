import React from 'react';

import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    // history: agora o Router passa a ouvir todas as partes de navegação que a gente fizer dentro desse history
    <Router history={history}>  
      <Routes />
    </Router>
  );
}

export default App;