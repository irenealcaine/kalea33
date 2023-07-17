import "./Button.scss";

const Button = ({ color, onClick, value, disabled }) => {
  return (
    <button className={`${color}`} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;
