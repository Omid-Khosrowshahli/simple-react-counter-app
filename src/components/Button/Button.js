import './Button.css';

const Button = ({children, bgcolor, fontSize, clicked = () => {}}) => {
  return (
    <button className="btn" onClick={clicked} style={{backgroundColor: bgcolor, fontSize: fontSize}}>{children}</button>
  );
}

export default Button;