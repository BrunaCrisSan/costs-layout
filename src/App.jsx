import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import viteLogo from '/costs.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <p>Costs</p>
      </div>
    </>
  );
}

export default App;
