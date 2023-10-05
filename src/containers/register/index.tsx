
import { AppLogoSpin } from "../../components";
import "./index.css"
import RegisterForm from "./RegisterForm";
/************************************* TYPING */ 
/************************************* COMPONENT */ 

const RegisterPage = () => {
  return (
    <>
      <main className="register-main">
        {/* <picture className="login-picture">
          <source id ="app-logo-source" media="(max-width:600px)" srcSet="./square6low.png"/>
          <img id="app-logo" className="app-logo" src="./square6.png" alt="a spinning disc" />
          <figcaption><h1>P O R T A L</h1></figcaption>
        </picture>  */}
        <div className="register-form">
            {/* <AppLogoSpin height="10vh"/> */}
            <h3 style={{margin:"0px"}}>Sign In</h3>
            <RegisterForm />
        </div>
      </main>
    </>
  );
}
export default RegisterPage;
