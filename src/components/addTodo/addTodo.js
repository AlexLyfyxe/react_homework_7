import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './AddTodo.css';

export default function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState('');

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue('');
  }

  return (
    <div className="add-todo">
      <input placeholder="Введите задачу" value={value} onChange={e => setValue(e.target.value)} />
      <button className="save-button" onClick={saveTodo}>
        Сохранить
      </button>
    </div>
  );
}
