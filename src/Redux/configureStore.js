import {createStore} from 'redux';
import { combineReducers } from 'redux';
import { Products } from './products';
import { Promotions } from './promotions';
import { Leaders } from './leaders';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}