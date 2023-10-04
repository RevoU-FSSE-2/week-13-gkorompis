
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Service } from './pages';

/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
