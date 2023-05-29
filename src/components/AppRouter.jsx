import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { useAuthContext } from '../context';
import { useEffect } from 'react';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading, setIsLoading } = useAuthContext();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isAuth) {
    return (
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
        <Route path='*' element={<Navigate to='/posts' />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      ))}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};
export default AppRouter;
