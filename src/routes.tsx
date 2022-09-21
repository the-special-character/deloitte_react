import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import AuthLayout from './layout/authLayout';
import MainLayout from './layout/mainLayout';
import Home from './pages/home';
// import Login from './pages/login';
// import Register from './pages/register';

// const MainLayout = lazy(() => import('./layout/mainLayout'));
const AuthLayout = lazy(() => import('./layout/authLayout'));
// const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
