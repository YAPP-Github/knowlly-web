import { atom } from 'recoil';

interface IPlayerMatching {
  schedule: string;
  introduction: string;
}

const playerMatchingState = atom<IPlayerMatching>({
  key: 'playerMatching',
  default: {
    schedule: '',
    introduction: '',
  },
});

export default playerMatchingState;
