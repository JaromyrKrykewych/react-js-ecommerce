import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './routes/Home/Home';
import Products from './routes/Products/Products';
import ProductById from './routes/ProductById/ProductById';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path='/producto/:id' element={<ProductById />} />
        <Route path='/productos/:category' element={<Products />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
