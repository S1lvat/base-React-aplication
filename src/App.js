import React from 'react';

import Login from './Pages/Login';
import GlobalStyle from './styles/globalStyles';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />;
      <Login />;
      <GlobalStyle />;
    </>
  );
}

export default App;
