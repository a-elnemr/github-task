// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   viewFilterLabel: 'All',
//   viewFilterValue: -1,
//   LanguageFilterLabel: 'All',
//   LanguageFilterValue: '',
//   DateFilterLabel: '1 Jul 23',
//   DateFilterValue: '2023-07-01',
// };

// export const filterSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     setViewFilter: (state, action) => {
//       state.viewFilterLabel = action.payload.label;
//       state.viewFilterValue = action.payload.value;
//     },
//     resetViewFilter: state => {
//       state.viewFilterLabel = 'All';
//       state.viewFilterValue = -1;
//     },
//     setLanguageFilter: (state, action) => {
//       state.LanguageFilterLabel = action.payload.label;
//       state.LanguageFilterValue = action.payload.value;
//     },
//     resetLanguageFilter: state => {
//       state.LanguageFilter = 'All';
//     },
//     setDateFilter: (state, action) => {
//       state.DateFilterLabel = action.payload.label;
//       state.DateFilterValue = action.payload.value;
//     },
//     resetDateFilter: state => {
//       state.DateFilterLabel = 'All';
//       state.DateFilterValue = '';
//     },
//   },
// });
