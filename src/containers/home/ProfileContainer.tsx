import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import './index.css'
/************************************* TYPING */ 
interface ProfileDocument {
    username: string
}
interface Props {
    data: ProfileDocument[] | undefined
};
interface NavigateButtonHandler {
    navigate: NavigateFunction;
    path: string
}
/************************************* VARIABLES */
const homeButtonHandler = ({navigate, path}: NavigateButtonHandler) =>{
    navigate(path);
}
/************************************* COMPONENT */ 
const ProfileContainer = ({data}:Props) => {
    console.log("### props > data", data);
    if(!data){
        data = []
    }
    const navigate = useNavigate();
    return (
        <>
            
            {/* Button Bar*/}
            <div className="welcome-banner">
                <div><h1>Hi, {data[0].username}!</h1></div>
                <div className="navigator-banner">
                     <Button variant="contained" size="large" color="info" onClick={()=>homeButtonHandler({navigate, path:"/service"})}> Explore Here </Button>
                </div>
            </div>
            
        </>
    )
}

export default ProfileContainer;