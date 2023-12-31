import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import store from './store/store';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                <Navbar />    
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;