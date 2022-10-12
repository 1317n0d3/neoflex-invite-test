import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import CartPage from './components/CartPage';
import StorePage from './components/StorePage';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to={'/neoflex-invite-test'} />,
  },
  {
    path: "/neoflex-invite-test",
    element: <StorePage />,
  },
  {
    path: "/neoflex-invite-test/cart",
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
