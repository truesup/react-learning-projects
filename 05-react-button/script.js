const App = ({ initialButtonText, initialClasses }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClasses);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('greenBtn');
  };

  return (
    <div className='app'>
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialClasses='' initialButtonText='Click me please!' />);
