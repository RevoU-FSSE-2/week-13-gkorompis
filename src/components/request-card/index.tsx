import { DeleteButton, EditButton } from "..";
import {useState, Dispatch, SetStateAction} from 'react';
import axios from 'axios';
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
interface ServiceRequestDocument {
    _id: string,
    requestedBy: string,
    status: string,
    requestedServices: string[],
    createdTime: string,
    updatedTime: string
}
interface Props {
    document: ServiceRequestDocument;
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
/************************************* VARIABLES */ 
const reformatDate = (inputDate:string) => {
    // Input date string
    var dateString = inputDate || "2023-09-01T20:37:28.651Z";

    // Create a Date object from the input string
    var date = new Date(dateString);

    // Get the individual date and time components
    var year = date.getFullYear().toString().slice(-2); 
    var month = String(date.getMonth() + 1).padStart(2, "0"); 
    var day = String(date.getDate()).padStart(2, "0"); 
    var hours = String(date.getUTCHours()).padStart(2, "0"); 
    var minutes = String(date.getUTCMinutes()).padStart(2, "0"); 

    // Create the formatted date string
    var formattedDate = day + "-" + month + "-" + year + " " + hours + ":" + minutes;
    console.log(formattedDate); // Output: "01-09-23 20:37"
    return formattedDate
};

const patchApprove = async (id:string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>{
    setIsLoading(true);
    const response = await axios.patch(`https://gedldowmye.execute-api.ap-southeast-3.amazonaws.com/prod/servicesRequest/approve/${id}`)
    setIsLoading(false)
    console.log("patchApprove response", response);
}
const deleteServiceRequest = async (id:string, setIsLoading: Dispatch<SetStateAction<boolean>>) =>{
    setIsLoading(true);
    const response = await axios.delete(`https://gedldowmye.execute-api.ap-southeast-3.amazonaws.com/prod/servicesRequest/${id}`)
    setIsLoading(false);
    console.log("deleteRoute response", response);
}

/************************************* COMPONENT */ 
const RequestCard = ({document, setIsLoading}: Props) =>{
    const {requestedBy, requestedServices, _id, createdTime, updatedTime, status} = document;
    const formattedCreatedTime = reformatDate(createdTime);
    const formattedUpdatedTime = reformatDate(updatedTime);
    console.log()
    return (
        <div className="placeholder">
            <div className="request-cards cards">
                <div>
                    <h3>{_id}</h3>
                    <p>requestedBy: {requestedBy}</p>
                    <p>requestedService: {requestedServices[0]}</p>
                    <p>status: {status}</p>
                    <p>createdTime: {formattedCreatedTime}</p>
                    <p>updatedTime: {formattedUpdatedTime}</p>
                </div>
                <div className="placeholder-edit-button">
                    <EditButton onClick={()=>{patchApprove(_id, setIsLoading)}}/>
                    <DeleteButton onClick={()=>{deleteServiceRequest(_id, setIsLoading)}}/>
                </div>
                
            </div>
            
        </div>
        
    )
};
export default RequestCard;