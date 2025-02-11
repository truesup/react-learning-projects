import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className='App'>
      <PetInfo animal='ferret' age='1' />
      <PetInfo animal='perrot' age='4' />
    </div>
  );
}

export default App;
