import React from 'react';

import TodoList from '@containers/TodoListContainer';
import TodoForm from '@containers/TodoFormContainer';

import { IAppState } from '@store/actions/actionTypes';

import './styles/index.scss';
import './styles/index.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App(props: IAppState) {
  return (
    <div className="app">
      <div className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <TodoForm />
        </header>
        <TodoList />
        {props.todos.length > 0 && <TodoForm />}
      </div>
    </div>
  );
}

export default App;
