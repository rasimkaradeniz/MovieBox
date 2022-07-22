import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  </>
  );
}

export default App;
