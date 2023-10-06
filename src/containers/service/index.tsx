import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serviceAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';
import ServiceContainer from './ServiceContainer';
import { LinearProgress } from '@mui/material';

/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ServiceDocument {
    _id: string,
    serviceName: string,
    serviceCode: string,
    permission: string[],
    createdTime: any,
    updatedTime: any
}
interface ServiceState {
    loading: boolean,
    serviceState?: ServiceDocument[]
    error?: Error
}
interface Stores {
  services: ServiceState
}
/************************************* COMPONENT */ 

const ServicePage = () => {
  const dispatch= useDispatch();
  const services = useSelector((state:Stores)=>state.services);
  const {loading, error, serviceState} = services;
  console.log({loading, error, serviceState});

  useEffect(()=>{
    dispatch(serviceAction() as unknown as AnyAction);
    // console.log("### serviceState", {serviceState});
  }, [dispatch]);
  return (
    <div className="service-page page">
      {loading ? (
        <LinearProgress color="secondary" /> 
      ) : error ? (
        <p> error...</p>
      ) :  (
        <ServiceContainer data={serviceState} />
      ) 
      }
    </div>
  );
}
export default ServicePage;
