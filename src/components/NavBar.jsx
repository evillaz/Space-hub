import { NavLink } from 'react-router-dom';
import spaceLogo from './Images/planet.png';
import './styles/NavBar.css';

const NavBar = () => (
  <>
    <div className="nav-bar">
      <NavLink to="/" style={{ color: '#000' }}>
        <div className="logo">
          <img src={spaceLogo} className="image" alt="Space Logo" />
          <h1>Space Travelers Hub</h1>
        </div>
      </NavLink>
      <nav className="nav-items">
        <ul className="menu-list">
          <li className="list-item"><NavLink to="/">Rockets</NavLink></li>
          <li className="list-item"><NavLink to="missions">Missions</NavLink></li>
          <li className="list-item"><NavLink to="profile">My Profile</NavLink></li>
        </ul>
      </nav>
    </div>
    <hr />
  </>
);

export default NavBar;
