import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useAuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useAuthContext();

  const login = () => {
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div className='container'>
      <h5>Login page</h5>
      <form>
        <MyInput placeholder='login' type='text' />
        <MyInput placeholder='password' type='password' />
        <MyButton onClick={login}>Login</MyButton>
      </form>
    </div>
  );
};
export default Login;
