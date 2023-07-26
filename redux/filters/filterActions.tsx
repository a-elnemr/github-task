import {
  setViewFilter,
  resetViewFilter,
  setDateFilter,
  resetDateFilter,
  setLanguageFilter,
  resetLanguageFilter,
} from './filterTypes';

function setViewFilterAction(label: string, value: number) {
  return {
    type: setViewFilter,
    payload: {label, value},
  };
}

function resetViewFilterAction() {
  return {
    type: resetViewFilter,
  };
}

function setLanguageFilterAction(label: string, value: string | null) {
  return {
    type: setLanguageFilter,
    payload: {label, value},
  };
}

function resetLanguageFilterAction() {
  return {
    type: resetLanguageFilter,
  };
}

function setDateFilterAction(label: string, value: string) {
  return {
    type: setDateFilter,
    payload: {label, value},
  };
}

function resetDateFilterAction() {
  return {
    type: resetDateFilter,
  };
}

export {
  setViewFilterAction,
  resetViewFilterAction,
  setLanguageFilterAction,
  resetLanguageFilterAction,
  setDateFilterAction,
  resetDateFilterAction,
};
