import React, { useState } from 'react'; // importing use state
import { Button } from './components/button';
import './components/button.css';

function App() {
  const [count, setCount] = useState(0); //use state hook

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      {/* making countable button  */}
      <Button text="+" className="plus-btn" onClick={() => setCount(count + 1)} />  
      <Button text="-" className="minus-btn" onClick={() => setCount(count - 1)} />
    </div>
  );
}

export default App;
