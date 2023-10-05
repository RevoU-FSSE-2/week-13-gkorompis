import {Field, ErrorMessage, FieldProps} from 'formik';
import {Input, Form as AntdForm, DatePicker as AntDatePicker} from 'antd';

interface FormItems1Props {
    btnNextHandler:  React.Dispatch<React.SetStateAction<Number>>
}
const FormItem = AntdForm.Item;


const FormItems1 = ({btnNextHandler}:FormItems1Props) =>{
  
    return (
        <>
            <h2>STEP 1</h2>
            <div className="form-field">
                <FormItem className="app-form-antd-form-item" label="Full Name" labelCol={{ span: 16 }} wrapperCol={{ span: 16 }}>
                    <Field as={Input} name="fullname" placeholder="Full Name"/>
                    <div className="form-field-error">
                        <ErrorMessage name="fullname" component="span"/>
                    </div>
                </FormItem>
            </div>
            <div className="form-field">
                <FormItem className="app-form-antd-form-item" label="Email" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Field as={Input} name="email" placeholder="Email"/>
                    <div className="form-field-error">
                        <ErrorMessage name="email" component="span"/>
                    </div>
                </FormItem>
            </div>
            <div className="form-field">
                <FormItem className="app-form-antd-form-item" label="DOB" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    {/* <Field name="dob" placeholder="dob" type="date" component={AntDatePicker} format={"YYYY-MM-DD"}/> */}
                                        <Field name="dob">
                    {({ field, form }:FieldProps) => (
                        <AntDatePicker
                            {...field}
                            placeholder="DOB"
                            format="DD-MM-YYYY"
                            onChange={(date, dateString) => {
                                // Use Day.js to format the date and set it in the form field
                                // const formattedDate = date ? dayjs(date).format("DD-MM-YYYY") : "";
                                form.setFieldValue("dob", date);
                            }}
                        />
                    )}
                </Field>
                    <div className="form-field-error">
                        <ErrorMessage name="dob" component="span"/>
                    </div>
                </FormItem>
            </div>
            
            <button type="button" onClick={()=>{btnNextHandler(1)}}>Next</button>
        </>
    )
}

export default FormItems1;