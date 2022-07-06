import { atom } from 'recoil';

export const isShowSearchModalAtom = atom<boolean>({
  key: 'isShowSearchModal',
  default: false,
});
