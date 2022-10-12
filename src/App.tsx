import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import CartPage from './components/CartPage';
import StorePage from './components/StorePage';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to={'/'} />,
  },
  {
    path: "/",
    element: <StorePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1110px;
`;

export default App;
