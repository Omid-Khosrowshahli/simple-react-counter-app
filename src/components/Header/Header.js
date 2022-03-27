import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h2 className="text">Heading</h2>
      <div className="buttons">
        <Button bgcolor="green">Login</Button>
        <Button bgcolor="red">Logout</Button>
      </div>
    </div>
  );
}

export default Header;