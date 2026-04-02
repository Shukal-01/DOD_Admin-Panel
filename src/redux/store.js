import { configureStore } from '@reduxjs/toolkit'
import CreateSagaModdleWare from 'redux-saga'
import SagaData from './saga'
import roothReducer from './rootReducer';


const sagaMiddleware = CreateSagaModdleWare()

const store = configureStore({
    reducer: roothReducer,
    middleware: () => [sagaMiddleware],
})

sagaMiddleware.run(SagaData)
export default store
