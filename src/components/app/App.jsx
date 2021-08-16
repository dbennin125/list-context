import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  CharactersListContainer
} from '../../containers/characters/CharactersListContainer';
import { CharacterDetails } from '../character/CharacterDetails';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={CharactersListContainer} />
        <Route exact path="/characters/:id" component={CharacterDetails} />
      </Switch>
    </>
  );
};

export default App;
