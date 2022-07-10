import { IPlayerMatchingState } from '@/types/matching';
import { atom } from 'recoil';

export const matchingStepState = atom<number>({
  key: 'matchingStep',
  default: 0,
});

export const playerMatchingState = atom<IPlayerMatchingState>({
  key: 'playerMatching',
  default: {
    scheduleId: 0,
    content: '',
  },
});
