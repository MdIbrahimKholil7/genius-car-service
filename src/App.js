import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Pages/Header/Header';
import Hero from './components/Pages/Home/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' element={<Hero/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
