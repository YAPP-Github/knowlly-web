import { atom } from 'recoil';

const matchingStepState = atom({
  key: 'matchingStep',
  default: 0,
});

export default matchingStepState;
