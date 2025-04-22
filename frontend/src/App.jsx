import React, { useState } from 'react';
import All from './components/All';
import Login from './pages/Login';

function App() {
  const [role, setRole] = useState(null); // 'admin' or 'student'

  return (
    <div>
      {!role ? <Login setRole={setRole} /> : <All role={role} />}
    </div>
  );
}

export default App;
