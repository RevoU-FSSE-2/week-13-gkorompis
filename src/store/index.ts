import {configureStore} from "@reduxjs/toolkit";
import {serviceReducer, profileReducer} from "../reducers";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        services: serviceReducer,
        profile: profileReducer
    },
    middleware: [thunk]
})

export default store;