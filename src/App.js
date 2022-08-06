import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Person from "./pages/Person.jsx";
import  CheckImage  from "./components/CheckImage.jsx";

function App() {
  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:type/:id" element={<Detail />} />
      <Route path="detail/:type/:id-:name" element={<Detail />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile/:id" element={<Person />} />
      <Route path="profile/:id/:name" element={<Person />} />
    </Routes>
  </>
  );
}

export default App;
