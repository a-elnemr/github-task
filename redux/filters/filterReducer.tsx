//Reducer for filter

import {
  setViewFilter,
  resetViewFilter,
  setDateFilter,
  resetDateFilter,
  setLanguageFilter,
  resetLanguageFilter,
} from './filterTypes';

const initialState = {
  viewFilterLabel: 'All',
  viewFilterValue: -1,
  LanguageFilterLabel: 'All',
  LanguageFilterValue: '',
  DateFilterLabel: '1 Jul 23',
  DateFilterValue: '2023-07-01',
};

const filterReducer = (state = initialState, action: { type: any; payload: { label: any; value: any; }; }) => {
  switch (action.type) {
    case setViewFilter:
      return {
        ...state,
        viewFilterLabel: action.payload.label,
        viewFilterValue: action.payload.value,
      };
    case resetViewFilter:
      return {
        ...state,
        viewFilterLabel: 'All',
        viewFilterValue: -1,
      };
    case setLanguageFilter:
      return {
        ...state,
        LanguageFilterLabel: action.payload.label,
        LanguageFilterValue: action.payload.value,
      };
    case resetLanguageFilter:
      return {
        ...state,
        LanguageFilterLabel: 'All',
        LanguageFilterValue: '',
      };
    case setDateFilter:
      return {
        ...state,
        DateFilterLabel: action.payload.label,
        DateFilterValue: action.payload.value,
      };
    case resetDateFilter:
      return {
        ...state,
        DateFilterLabel: 'All',
        DateFilterValue: '',
      };

    default:
      return state;
  }
};

export default filterReducer;
