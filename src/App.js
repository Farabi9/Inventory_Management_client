import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Footer from './Shared/Footer';
import Navber from './Shared/Navber';

function App() {
 
  return (
    <div className="App">
    <Navber></Navber>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
