
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Header from './Header';
import Register from './Register';
import Footer from './Footer';
import MyCart from './MyCart';
import AdminLogin from './AdminLogin';
import AdminDash from './AdminDash';
import View from './View';
import Add from './Add';
import EditProd from './EditProd';
import MyOrder from './MyOrder';
import Orders from './Orders';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
          <Route path="/Dashboard/:email" element={<Dashboard></Dashboard>}></Route>
          <Route path="/AdminDashboard" element={<AdminDash></AdminDash>}></Route>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/myCart/:email" element={<MyCart></MyCart>}></Route>
        <Route path="/myOrder/:email" element={<MyOrder></MyOrder>}></Route>
        <Route path="/View/:pid" element={<View></View>}></Route>
        <Route path="/Add" element={<Add></Add>}></Route>
        <Route path="/Edit/:id" element={<EditProd></EditProd>}></Route>
        <Route path="/Orders" element={<Orders></Orders>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
