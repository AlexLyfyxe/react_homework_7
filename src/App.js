import React, { useState } from 'react';
import Header from './components/header/header';
import AddTodo from './components/addTodo/addTodo';
import ListTodo from './components/listTodo/listTodo';

import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <div className="todo-list">
        <ListTodo todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
