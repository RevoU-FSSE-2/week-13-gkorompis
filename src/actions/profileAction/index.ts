
import { Dispatch } from 'redux';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
const actionTypes = {
    loading: "PROFILE_LOADING",
    success: "PROFILE_SUCCESS",
    error: "PROFILE_ERROR"
}
const dataDummy = `[
    {
        "username": "Gracia Korompis"
    }
]`
/************************************* EXPORTS */ 
const profileAction = () =>async(dispatch:Dispatch) =>{
    try {
        if(!dispatch){
            throw Error
        };
        //loading
        dispatch({type: actionTypes.loading});
        
        //fetch data
        dispatch({type: actionTypes.success, payload: JSON.parse(dataDummy)});

    } catch (error) {
        const errorMessage = {code: 403, message: error};
        dispatch({type: actionTypes.error, payload: errorMessage}) 
    }
}
export default profileAction