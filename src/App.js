import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Blog/Blog';
import AddProduct from './Dashboard/AddProduct';
import Dashbord from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import Review from './Dashboard/Review';
import Home from './Home/Home';
import Purchase from './Home/Purchase';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import SignUp from './Login/Signup';
import Footer from './Shared/Footer';
import Navber from './Shared/Navber';

function App() {
 
  return (
    <div className="App">
    <Navber></Navber>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      <Route path='/dashboard' element={<Dashbord></Dashbord>}>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
<ToastContainer/>
    </div>
  );
}

export default App;
