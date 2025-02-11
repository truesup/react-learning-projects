import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && (
        <ResetButton
          onClick={() => {
            setCount(0);
          }}
        />
      )}
    </div>
  );
}

export default App;
