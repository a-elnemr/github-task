// initial state
import {
  FetchRequest,
  FetchFailure,
  FetchSuccess,
  ResetCardState,
  setData,
  setError,
  setLoading,
  setMax,
  setRefreshing,
} from './CardsTypes';

const initialState = {
  loading: false,
  error: false,
  max: false,
  refreshing: false,
  data: [],
};

const CardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case setMax:
      return {
        ...state,
        max: action.payload,
      };
    case setRefreshing:
      return {
        ...state,
        refreshing: action.payload,
      };
    case setLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case setError:
      return {
        ...state,
        error: action.payload,
        refreshing: false,
      };
    case setData:
      return {
        ...state,
        data: action.payload,
      };
    case ResetCardState:
      return {
        ...state,
        loading: false,
        error: false,
        max: false,
        refreshing: false,
        data: [],
      };
    case FetchRequest:
      return {
        ...state,
        loading: true,
      };

    case FetchSuccess:
      return {
        ...state,
        loading: false,
        max: false,
        refreshing: false,
        error: false,
        data: [...state.data.concat(action.payload)],
      };
    case FetchFailure:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default CardsReducer;
