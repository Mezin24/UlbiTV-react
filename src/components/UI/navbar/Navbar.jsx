import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';
import { useAuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useAuthContext();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <header className={cl.header}>
      <h1 className={cl.title}>React ULBTV</h1>
      {isAuth && (
        <nav style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
          <MyButton
            style={{ backgroundColor: '#242424', color: 'white' }}
            onClick={logout}
          >
            Logout
          </MyButton>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
