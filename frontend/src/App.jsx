import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './pages/Login';

function App() {
  const [role, setRole] = useState(null); // 'admin' or 'student'

  return (
    <div>
      {!role ? <Login setRole={setRole} /> : <Landing role={role} />}
    </div>
  );
}

export default App;
