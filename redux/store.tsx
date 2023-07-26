//Redux store boilerplate
import {createStore, combineReducers, applyMiddleware} from 'redux';
import filterReducer from './filters/filterReducer';
import CardsReducer from './Cards/CardsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  filters: filterReducer,
  cards: CardsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
