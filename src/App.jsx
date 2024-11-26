import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
   <div className='bg-black h-screen'>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
