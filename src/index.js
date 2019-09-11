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
        Todo List used Hooks
      </Typography>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />

      <TodoList
        todos={todos}
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
