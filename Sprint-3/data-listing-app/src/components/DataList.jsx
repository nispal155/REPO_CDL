import React, { useState } from 'react';
import './dataList.css';

const DataList = () => {
  const [items, setItems] = useState(['Learn React', 'Build UI']);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      setItems([input, ...items]);
      setInput('');
    }
  };

  return (
    <div className="data-list-container">
      <h2>Task List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="data-list">
        {items.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DataList;
