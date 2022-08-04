import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:type/:id" element={<Detail />} />
      <Route path="detail/:type/:id-:name" element={<Detail />} />
        
 
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </>
  );
}

export default App;
