import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <React.Fragment>
      {!user ? <Login setUser={setUser} /> : <Home setUser={setUser} />}
    </React.Fragment>
  );
}

export default App;
