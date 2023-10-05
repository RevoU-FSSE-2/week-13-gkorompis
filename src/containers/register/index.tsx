
import "./index.css"
import RegisterForm from "./LoginForm";
import { useState } from 'react';
/************************************* TYPING */ 
interface FormValues {
    username: string,
    password: string
}
/************************************* COMPONENT */ 

const RegisterPage = () => {
  let [formValues, setFormValues] = useState<FormValues>({} as FormValues);
  return (
    <>
      <main className="register-main">
        {/* <picture className="login-picture">
          <source id ="app-logo-source" media="(max-width:600px)" srcSet="./square6low.png"/>
          <img id="app-logo" className="app-logo" src="./square6.png" alt="a spinning disc" />
          <figcaption><h1>P O R T A L</h1></figcaption>
        </picture>  */}
        <div className="register-form">
            <h3 style={{margin:"0px"}}>Sign In</h3>
            <RegisterForm handlerFormValues={setFormValues}/>
        </div>
      
      </main>
    </>
  );
}
export default RegisterPage;
