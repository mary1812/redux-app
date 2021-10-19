import { createStore } from 'redux';
import reducer from '../reducers';

const allstore = createStore(reducer);

export default allstore;
