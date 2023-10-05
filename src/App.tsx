
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { Home, Service, Login, Register } from './pages';

/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const App = () => {
  localStorage.removeItem("token");
  const token = localStorage.getItem('token');
  const isAuthenticated = token || false;
  console.log("###token", isAuthenticated)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
