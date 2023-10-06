import {configureStore} from "@reduxjs/toolkit";
import {serviceReducer, profileReducer, serviceRequestReducer} from "../reducers";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        services: serviceReducer,
        profile: profileReducer,
        serviceRequests: serviceRequestReducer
    },
    middleware: [thunk]
})

export default store;