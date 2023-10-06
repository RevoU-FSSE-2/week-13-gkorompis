import "./index.css"
import { useNavigate, NavigateFunction } from "react-router-dom";
/************************************* TYPING */
interface Props {
    navigate: NavigateFunction;
    path: string
}
/************************************* VARIABLES */
const homeButtonHandler = ({navigate, path}: Props) =>{
    navigate(path);
}
/************************************* COMPONENT */
const Navbar = () => {
    const navigate = useNavigate();
    return ( 
     
            <nav className="navbar">
                    <div className="navbar-div">
                        <a onClick={() => homeButtonHandler({navigate, path: "/home"})}>Home</a>
                        <a onClick={() => homeButtonHandler({navigate, path: "/service"})}>Services</a>
                        <a onClick={() => homeButtonHandler({navigate, path: "/request"})}>Requests</a>
                    </div>
                    <div className="navbar-div">
                        <a className="logout" onClick={() =>{
                            localStorage.removeItem('token');
                            homeButtonHandler({navigate, path: "/"});
                        }}>logout</a>
                    </div>  
            </nav>
    )
};

export default Navbar;