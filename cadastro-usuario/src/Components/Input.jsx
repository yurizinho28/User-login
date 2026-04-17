import '../Input.css';

function Input(props) {
  return (
    <div>
      <label for={props.name}>{props.name}</label>

      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
