import { PlusButton, RequestCard } from "../../components"
import { Dispatch, SetStateAction } from "react"
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
    console.log("### props > data", data);
    if(!data){
        data = []
    }
    return (
        <>
            {/* Button Bar*/}
            <div className="page-group-button">
                <h2>Requests</h2>
                <PlusButton/>
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