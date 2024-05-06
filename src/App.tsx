import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./Product";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
