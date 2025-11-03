import React, { useState } from 'react';

const FetchData = () => {
  const [todo, setTodo] = useState([]);

  async function fetchHandler() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodo(data);
  }

  return (
    <div >
      <h1>FetchData</h1>
      <button onClick={fetchHandler}>fetch todos</button>

      {todo.map((item) => (
        <div key={item.id}>
            {item.id}.
          <strong>{item.title}</strong> <br />
          Completed: {item.completed ? "Yes" : "No"}
        </div>
      ))}

    </div>
  );
};

export default FetchData;
