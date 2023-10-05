import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Field, ErrorMessage} from 'formik';
import {Input, Form as AntdForm} from 'antd';
import { Button} from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";

/* ------------------------------ INTERFACES */
interface FormValues {
    name: string,
    email: string,
    username: string,
    role: string,
    password: string
}
interface NavigateButtonHandler {
    navigate: NavigateFunction;
    path: string
}
/* ------------------------------ VARIABLES */
const initialValues:FormValues={
    name: "",
    email: "",
    username: "",
    password: "",
    role: "basic"
};
const FormItem = AntdForm.Item;
const onClickFormik = (values:FormValues) => {
    console.log("onClick", values);
};
const validationSchema = Yup.object({
    name: Yup.string().required("Password is required"),
    email: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
        .min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must be alphanumeric'),
    role: Yup.string().required("Password is required"),
})
const fieldNames = ["name", "email",  "username", "password", "role"] as string[];
const fieldLabels = ["Name", "Email",  "Username", "Password", "Role"] as string[];
/* ------------------------------ COMPONENT */
const RegisterForm = () =>{
    const navigate = useNavigate();
    const onSubmitFormik = (values:FormValues) => {
        console.log("onSubmit", values);
        navigate('/');
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
                                    <Field as={Input} name={fieldNames[1]} placeholder={fieldLabels[1]} style={{margin: "0px"}}/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[1]} component="span"/>
                                    </div>
                                </FormItem>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[2]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[2]} placeholder={fieldLabels[2]} style={{margin: "0px"}}/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[2]} component="span"/>
                                    </div>
                                </FormItem>
                                <FormItem className="app-form-antd-form-item" label={fieldLabels[3]} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Field as={Input} name={fieldNames[3]}  placeholder={fieldLabels[3]} type="password"/>
                                    <div className="form-field-error">
                                        <ErrorMessage name={fieldNames[3]} component="span"/>
                                    </div>
                                </FormItem>


                             
                                <div className="register-button">
                                    <Button variant="contained" size="small" color="success" type="submit"> Sign Up </Button>
                                </div>
                            </Form>
                        
                        )                       
                    }
                }
            </Formik>
        </div>
    )
}

export default RegisterForm;