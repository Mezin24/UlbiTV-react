import { About, Error, Login, PostPage, Posts } from '../pages';

export const privateRoutes = [
  { path: '/posts', exact: true, element: <Posts /> },
  { path: '/about', exact: true, element: <About /> },
  { path: '/posts/:id', exact: true, element: <PostPage /> },
  { path: '/error', exact: true, element: <Error /> },
];

export const publicRoutes = [{ path: 'login', element: <Login /> }];
