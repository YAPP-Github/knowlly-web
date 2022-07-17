import { IUserImage } from './profile';

export interface IPlayerUserMatchingForm {
  message: string;
  data: IPlayerUserMatchingForm;
  timestamp: number;
}

export interface IPlayerUserForm {
  id: number;
  content: string;
  user: IPlayerUser;
  state: string;
  expirationDate: string;
  startAt: string;
  endAt: string;
  userImage: IUserImage;
}

export interface IPlayerUser {
  id: number;
  username: string;
  ballCnt: number;
  intro: string;
  kakaoId: string;
  portfolio: null;
  identifier: string;
  coach: true;
  pushActive: false;
  userImgUrl: string;
}
