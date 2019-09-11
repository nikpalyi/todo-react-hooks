import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';

import TodoForm from './TodoForm';
import React, { useState } from 'react';

import TodoList from './TodoList';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className='App'>
      <Typography component='h1' variant='h2'>
        Todos
      </Typography>
      <TodoForm saveTodo={console.warn} />
      <TodoList todos={todos} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
