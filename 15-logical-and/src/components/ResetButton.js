function ResetButton(props) {
  return (
    <div>
      <button style={{ backgroundColor: 'lightgreen' }} onClick={props.onClick}>
        reset
      </button>
    </div>
  );
}

export default ResetButton;
