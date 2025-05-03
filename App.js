import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleAlert = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>Hello World!</h1>
      
      <button onClick={handleAlert} style={buttonStyle}>
        Click Me
      </button>

      <div style={{ marginTop: '20px' }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>
          Increase Counter
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
  backgroundColor: '#008CBA',
  color: 'white',
  border: 'none',
  borderRadius: '5px'
};

export default App;
