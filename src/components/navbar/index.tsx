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
        <nav>
            <nav className="navbar">
                <a onClick={() => homeButtonHandler({navigate, path: "/"})}>Home</a>
                <a onClick={() => homeButtonHandler({navigate, path: "/service"})}>Services</a>
                <a href="#">Report</a>   
                <div id ="menuToggle" className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div id="sidebar" className="hide">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Report</a>
                    </div>
                </div>   
            </nav>
        </nav>
    )
};

export default Navbar;