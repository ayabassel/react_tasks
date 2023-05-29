import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MyNav } from './components/MyNav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails'
import { NotFound } from './components/NotFound';


function App() {

  return (
    <div>
      <MyNav />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Products />} />
        <Route path='productdetails/:id' element={<ProductDetails />} />
				<Route path='*' element={<NotFound />} />
        {/* <Route path='mynav' element={<MyNav />} /> */}

 
      </Routes>
    </div>
    
  );
}

export default App;
