import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="ferret" age="2" hasPet />
      <PetInfo animal="perrot" age="4" hasPet={false} />
    </div>
  );
}

export default App;
