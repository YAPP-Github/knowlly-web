import { atom } from 'recoil';

export const matchingStepState = atom({
  key: 'matchingStep',
  default: 0,
});

interface IPlayerMatching {
  scheduleId: number;
  content: string;
}

export const playerMatchingState = atom<IPlayerMatching>({
  key: 'playerMatching',
  default: {
    scheduleId: 0,
    content: '',
  },
});
