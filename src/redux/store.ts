import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { storage } from '../storage/mmkv';

const persistKey = 'redux-store';

const loadState = () => {
  try {
    const savedState = storage.getString(persistKey);
    return savedState ? JSON.parse(savedState) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    storage.set(persistKey, JSON.stringify(state));
  } catch {}
};

const persistedState = loadState();
export const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveState(store.getState()));
