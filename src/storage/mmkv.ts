import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'github-repo-stars',
  encryptionKey: 'secure_key',
});

export const setItem = (key: string, value: any) =>
  storage.set(key, JSON.stringify(value));

export const getItem = <T>(key: string): T | null => {
  const v = storage.getString(key);
  return v ? JSON.parse(v) : null;
};
