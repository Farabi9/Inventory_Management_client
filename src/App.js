import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import AddProduct from './Dashboard/AddProduct';
import Dashbord from './Dashboard/Dashboard';
import ManageProducts from './Dashboard/ManageProducts';
import MyProfile from './Dashboard/MyProfile';
import Review from './Dashboard/AddReview';
import Home from './Home/Home';
import Purchase from './Home/Purchase';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import SignUp from './Login/Signup';
import Footer from './Shared/Footer';
import Navber from './Shared/Navber';
import Unwantedpage from './Shared/Unwantedpage';
import Protfolio from './Protfolio/Protfolio';
import Contract from './Contract/Contract';
import About from './About/About';
import { Toaster } from 'react-hot-toast';
import Myorder from './Dashboard/Myorder';

function App() {

  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/protfolio' element={<Protfolio></Protfolio>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<Dashbord></Dashbord>}>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder/:email' element={<Myorder></Myorder>}></Route>
          <Route path='addreview' element={<Review></Review>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproduct' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='*' element={<Unwantedpage></Unwantedpage>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
