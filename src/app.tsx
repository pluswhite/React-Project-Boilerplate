import React, { FC } from 'react';

import TodoList from '@containers/TodoListContainer';
import TodoForm from '@containers/TodoFormContainer';
import TodoFooter from '@containers/TodoFooterContainer';

import './styles/index.scss';
import './styles/index.css';

const App: FC = () => {
  return (
    <div className="app">
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <TodoForm />
        </header>
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};

export default App;
