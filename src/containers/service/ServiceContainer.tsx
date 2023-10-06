import { ServiceCard, CustomModal } from "../../components"
import * as Yup from 'yup';
import './index.css'
/************************************* TYPING */ 
interface ServiceDocument {
    _id: string,
    serviceName: string,
    serviceCode: string,
    permission: string[],
    createdTime: any,
    updatedTime: any
}
interface Props {
    data: ServiceDocument[] | undefined
};
/************************************* COMPONENT */ 
const ServiceContainer = ({data}:Props) => {
    // console.log("### props > data", data);
    if(!data){
        data = []
    }
    return (
        <>
            
            {/* Button Bar*/}
            <div className="page-group-button">
                <h2>SERVICES</h2>
                <CustomModal
                    fields = {[
                        {name: "serviceName", label: "service name", type: ""},
                        {name: "serviceCode", label: "service code", type: ""},
                        {name: "permission", label: "permission", type: ""}
                    ]}
                    initialValues={{
                        serviceName: "",
                        serviceCode: "",
                        permission: ""
                    }}
                    url = {"https://gedldowmye.execute-api.ap-southeast-3.amazonaws.com/prod/services"}
                    navigateTo= {"service"}
                    validationSchema={{
                        serviceName: Yup.string().required("This field is required"),
                        serviceCode: Yup.string().required("This field is required"),
                        permission: Yup.string().required("This field is required")
                    }}
                    arrayField="permission"
                />
            </div>
            <div className="grid-col-2">
                {
                    data?.map((x, key) =>{
                        return (
                            <ServiceCard key = {key} document = {x} />
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default ServiceContainer;