import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk) // esta línea es para poder hacer peticiones a un server
);

export default store;