import React, { useState } from 'react';

import './ListTodo.css';

export default function ListTodo({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [values, setValues] = useState({});

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].map(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValues({ ...values, [id]: title });
  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
      if (item.id === id) {
        item.title = values[id] || '';
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div className="todo-list">
      {todo.map(item => (
        <div key={item.id} className="todo-item">
          {edit === item.id ? (
            <div>
              <input
                value={values[item.id] || ''}
                onChange={e => setValues({ ...values, [item.id]: e.target.value })}
              />
            </div>
          ) : (
            <div className="todo-item">
              <div style={{ textDecoration: item.status ? 'none' : 'line-through' }}>
                {item.title}
              </div>

            </div>

          )}

          <div className="actions">
            {edit === item.id ? (
              <button className="edit" onClick={() => saveTodo(item.id)}>
                Сохранить
              </button>
            ) : (
              <>
                <button className="delete" onClick={() => deleteTodo(item.id)}>
                  Удалить
                </button>
                <button onClick={() => editTodo(item.id, item.title)}>Изменить</button>
                <button onClick={() => statusTodo(item.id)}>
                  {item.status ? 'Close' : 'Open'}
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
