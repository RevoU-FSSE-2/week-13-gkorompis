
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { profileAction } from "../../actions";
import "./index.css"
import RegisterForm from "./RegisterForm";
import { LinearProgress } from "@mui/material";
/************************************* TYPING */ 
interface State {
    loading: boolean,
    error?: Error
}
interface Store {
  profile: State;
}
/************************************* COMPONENT */ 

const RegisterPage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state:Store) => state.profile) ;
  const {loading, error} = profiles

  useEffect (()=>{
    dispatch(profileAction() as unknown as AnyAction);
  }, [dispatch])

  return (
    <>
      {
        loading ? <LinearProgress/> :
        error ? <h1>Error</h1> : 
        <main className="register-main">
          <div className="register-form">
              <h3 style={{margin:"0px"}}>Sign Up</h3>
              <RegisterForm />
          </div>
        </main>
      }
      
    </>
  );
}
export default RegisterPage;
