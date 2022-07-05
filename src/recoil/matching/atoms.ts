import { atom } from 'recoil';

export const matchingStepState = atom({
  key: 'matchingStep',
  default: 0,
});

interface IPlayerMatching {
  schedule: string;
  introduction: string;
}

export const playerMatchingState = atom<IPlayerMatching>({
  key: 'playerMatching',
  default: {
    schedule: '',
    introduction: '',
  },
});
