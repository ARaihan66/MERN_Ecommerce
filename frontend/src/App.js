import './App.css';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Pay from './Payment/Pay';
import Successful from './Payment/Successful';

function App() {
  const user = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Successful />} />
      </Routes>
    </div>
  );
}

export default App;
