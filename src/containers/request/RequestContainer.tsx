import { RequestCard, CustomModal} from "../../components"
import { Dispatch, SetStateAction } from "react"
import * as Yup from 'yup';
import './index.css'
/************************************* TYPING */ 
interface ServiceRequestDocument {
    _id: string,
    requestedBy: string,
    status: string,
    requestedServices: string[],
    createdTime: string,
    updatedTime: string
}
interface Props {
    data: ServiceRequestDocument[] | undefined,
    setIsLoading: Dispatch<SetStateAction<boolean>>
};
/************************************* COMPONENT */ 
const RequestContainer = ({data, setIsLoading}:Props) => {
    // console.log("### props > data", data);
    if(!data){
        data = []
    }
    return (
        <>
            {/* Button Bar*/}
            <div className="page-group-button">
                <h2>Requests</h2>
                <CustomModal
                    fields = {[
                        {name: "requestedBy", label: "requested by", type: ""},
                        {name: "requestedService", label: "requested service", type: ""},
                    ]}
                    initialValues={{
                        requestedBy: "",
                        requestedService: "",
                        status: "pending"
                    }}
                    url = {"https://gedldowmye.execute-api.ap-southeast-3.amazonaws.com/prod/servicesRequest"}
                    navigateTo= {"request"}
                    validationSchema={{
                        requestedBy: Yup.string().required("This field is required"),
                        requestedService: Yup.string().required("This field is required"),
                        status: Yup.string().required("This field is required")
                    }}
                    arrayField="requestedService"
                />
                
            </div>
            <div className="grid-col-2">
                {
                    data?.map((x, key) =>{
                        return (
                            <RequestCard key = {key} document = {x} setIsLoading={setIsLoading} />
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default RequestContainer;