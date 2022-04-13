import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import Hero from './components/Pages/Home/Hero/Hero';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' element={<Hero/>}></Route>
       <Route path='/hero' element={<Hero/>}></Route>
       <Route path='/servicedetails/:serviceId' element={<ServiceDetails/>}></Route>

       <Route path='/about' element={<About/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
