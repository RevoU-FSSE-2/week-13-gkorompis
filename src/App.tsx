
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Service, Login, Register } from './pages';

/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const App = () => {
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
