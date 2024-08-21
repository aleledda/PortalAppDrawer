import { configureStore } from '@reduxjs/toolkit'
import { AppReducer } from './Slices/AppSlice'

export default configureStore({
    // facciamo store di tutte le slice che ci servono gestire
    reducer: {
        // application == al nome che abbiamo dato nello Slice
        application: AppReducer,
    },
})
