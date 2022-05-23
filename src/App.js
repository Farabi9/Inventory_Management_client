import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './Dashboard/Dashboard';
import Home from './Home/Home';
import Purchase from './Home/Purchase';
import Login from './Login/Login';
import SignUp from './Login/Signup';
import Footer from './Shared/Footer';
import Navber from './Shared/Navber';

function App() {
 
  return (
    <div className="App">
    <Navber></Navber>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      <Route path='/dashboard' element={<Dashbord></Dashbord>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
