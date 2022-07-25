import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

function App() {
  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  </>
  );
}

export default App;
