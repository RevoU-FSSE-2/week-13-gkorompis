import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormItems1 from './FormItems1';
import { useState } from 'react';
import {Field, ErrorMessage, FieldProps} from 'formik';
import {Input, Form as AntdForm, DatePicker as AntDatePicker} from 'antd';
import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";

/* ------------------------------ INTERFACES */
interface FormValues {
    username: string,
    password: string,
}
interface NavigateButtonHandler {
    navigate: NavigateFunction;
    path: string
}
interface MultiStepFormProps {
    handlerFormValues: React.Dispatch<React.SetStateAction<FormValues>>
}
/* ------------------------------ VARIABLES */
const initialValues:FormValues={
    username: "",
    password: ""
};
const FormItem = AntdForm.Item;
const onClickFormik = (values:FormValues) => {
    console.log("onClick", values);
};
const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
})
const signUpHandler = (navigate:NavigateFunction) =>{
    navigate('/register');
};
const fieldNames = ["username", "password"];
const fieldLabels = ["Username", "Password"]
/* ------------------------------ COMPONENT */
const LoginForm = ({handlerFormValues}:MultiStepFormProps) =>{

    let [pageIndex, setPageIndex] = useState<Number>(0);
    

    const navigate = useNavigate();
    const onSubmitFormik = (values:FormValues) => {
        console.log("onSubmit", values);
        handlerFormValues(values)
        navigate('/home');
    };
    
    return(
        <div className="form-multi-steps">
            <Formik initialValues={initialValues} onSubmit={onSubmitFormik} onClick={onClickFormik} validationSchema={validationSchema}>
                {
                    () => { return (

                            <Form>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[0]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[0]} placeholder={fieldLabels[0]} style={{margin: "0px"}}/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[0]} component="span"/>
                                    </div>
                                </FormItem>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[1]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[1]}  placeholder={fieldLabels[1]} type="password"/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[1]} component="span"/>
                                    </div>
                                </FormItem>
                                <div className="login-text-group-signup">
                                     <p>Don't have an account?</p><p className="login-text-signup" onClick={()=>signUpHandler(navigate)}>SIGN UP</p>
                                </div>
                                <div className="login-button page-button">
                                    <Button variant="contained" size="small" color="success" type="submit"> Sign In </Button>
                                </div>
                            </Form>
                        
                        )                       
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginForm;