import { PlusButton, ServiceCard } from "../../components"
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
    console.log("### props > data", data);
    if(!data){
        data = []
    }
    return (
        <>
            
            {/* Button Bar*/}
            <div className="page-group-button">
                <h2>SERVICES</h2>
                <PlusButton/>
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