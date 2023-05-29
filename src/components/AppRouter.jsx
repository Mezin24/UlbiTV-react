import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Error, Posts } from '../pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Posts />} />
      <Route path='/about' element={<About />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Navigate to='/error' />} />
    </Routes>
  );
};
export default AppRouter;
