import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from '../redux/index';

export const store = configureStore({
    reducer: rootReducer
})