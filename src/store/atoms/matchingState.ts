import { atom } from 'recoil';

export const matchingState = atom({
  key: 'matching',
  default: {
    time: '',
    introduction: '',
  },
});
