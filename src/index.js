import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
  CharacterProvider 
} from './context/charactersProvider/CharacterProvider';
import { TotalPageProvider } from './context/pagesProvider/TotalPagesProvider';

render(
  <Router>
    <CharacterProvider>
      <TotalPageProvider>
        <App/>
      </TotalPageProvider>
    </CharacterProvider>
  </Router>,
  document.getElementById('root')
);
