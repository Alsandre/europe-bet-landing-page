import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { ErrorPage, Homepage, SignIn, SignUp, Events } from './routes';
import PokerLegendsMalta from './events/poker-legends-malta';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/events', element: <Events /> },
      { path: '/events/:eventId', element: <PokerLegendsMalta /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
