//Actions from ExploreCardsTypes
import {
  FetchRequest,
  FetchSuccess,
  FetchFailure,
  ResetCardState,
  setLoading,
  setError,
  setData,
  setMax,
  setRefreshing,
} from './CardsTypes';

const getCardsAction = () => ({
  type: FetchRequest,
});
const getCardsSuccessAction = (data: []) => ({
  type: FetchSuccess,
  payload: data,
});
const getCardsFailureAction = (errorMSG: string) => ({
  type: FetchFailure,
  payload: errorMSG,
});

const resetCardStateAction = () => ({
  type: ResetCardState,
});
const setLoadingAction = (value: boolean) => ({
  type: setLoading,
  payload: value,
});
const setErrorAction = (value: boolean) => ({
  type: setError,
  payload: value,
});
const setDataAction = (value: []) => ({
  type: setData,
  payload: value,
});

const setRefreshingAction = (value: boolean) => ({
  type: setRefreshing,
  payload: value,
});
const setMaxAction = (value: boolean) => ({
  type: setMax,
  payload: value,
});

const fetchCardsData = (ApiRoute: string) => {
  console.log('I AM FETCHINGGGGGG');
  return async (dispatch: any) => {
    dispatch(getCardsAction());

    try {
      let res = await fetch(ApiRoute);
      let data = await res.json();
      console.log('//////////////////////////////////');
      console.log(ApiRoute);
      console.log(data.items.length);
      console.log('//////////////////////////////////');
      dispatch(getCardsSuccessAction(data.items));
      if (data.items.length === 0) {
        dispatch(setMaxAction(true));
        dispatch(setLoadingAction(false));
      }
    } catch (err) {
      //@ts-ignore
      const errMessage = err.message;
      dispatch(getCardsFailureAction(errMessage));
    }
  };
};

export {
  fetchCardsData,
  resetCardStateAction,
  setLoadingAction,
  setErrorAction,
  setDataAction,
  setRefreshingAction,
  setMaxAction,
};
