import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serviceAction } from '../../actions';
import { AnyAction } from '@reduxjs/toolkit';

/************************************* TYPING */ 
interface Error {
    code: string | number,
    message: string
};
interface ServiceState {
    loading: boolean,
    serviceState?: any[] | undefined,
    error?: Error
}
interface Stores {
  services: ServiceState
}

/************************************* EXPORTS */ 

const Foo = () => {
  
  const dispatch= useDispatch();
  const services = useSelector((state:Stores)=>state.services);
  const {loading, error, serviceState} = services;

  useEffect(()=>{
    dispatch(serviceAction() as unknown as AnyAction);
    console.log("### serviceState", {serviceState});
  }, [dispatch]);
  return (
    <div className="App">
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p> error...</p>
      ) :  (
        <p>sucess</p>
      ) 
      }
    </div>
  );
}
export default Foo;
