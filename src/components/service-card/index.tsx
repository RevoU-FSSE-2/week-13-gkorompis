import { DeleteButton, EditButton } from "..";
import "./index.css"
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
    document: ServiceDocument;
}
/************************************* VARIABLES */ 

/************************************* COMPONENT */ 
const ServiceCard = ({document}: Props) =>{
    const {serviceName, serviceCode} = document;
    return (
        <div className="placeholder">
            <div className="service-cards cards">
                <div>
                    <h3>{serviceName}</h3>
                    <p>service name: {serviceName}</p>
                    <p>service code: {serviceCode}</p>
                </div>
                <div className="placeholder-edit-button">
                    <EditButton/>
                    <DeleteButton/>
                </div>
                
            </div>
            
        </div>
        
    )
};
export default ServiceCard;