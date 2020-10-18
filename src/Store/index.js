import { createStore, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';

import rootReducer from '../Reducers/index';

import rootSaga from '../Sagas';

const sagaMiddleware = createSageMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
