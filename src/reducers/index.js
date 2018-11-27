import itemsData from './items';
import { createStore, combineReducers } from 'redux';

const Reducer = combineReducers({ itemsData });

export const store = createStore(Reducer);