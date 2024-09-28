import React, { useState } from 'react';
import RepositoryList from './components/RepositoryList';
import RepositoryForm from './components/RepositoryForm';

const App = () => {
  const [repositories, setRepositories] = useState([]);

  const addRepository = (repo) => {
    setRepositories([...repositories, { id: Date.now(), ...repo }]);
  };

  return (
    <div>
      <h1>Wiki de Repositórios do GitHub</h1>
      <RepositoryForm addRepository={addRepository} />
      <RepositoryList repositories={repositories} />
    </div>
  );
};

export default App;
