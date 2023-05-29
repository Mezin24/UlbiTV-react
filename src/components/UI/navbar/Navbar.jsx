import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={cl.header}>
      <h1 className={cl.title}>React ULBTV</h1>
      <nav>
        <ul className={cl.nav}>
          <li>
            <Link className={cl.item} to='/posts'>
              Posts
            </Link>
          </li>
          <li>
            <Link className={cl.item} to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
