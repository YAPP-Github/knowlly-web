export interface IPlayerUserMatchingForm {
  message: string;
  data: IPlayerUserMatchingForm;
  timestamp: number;
}

export interface IPlayerUserForm {
  id: number;
  content: string;
  lecture: {
    id: number;
    startAt: string;
    endAt: string;
    state: string;
    reviewWritten: false;
  };
  user: IPlayerUser;
  state: string;
  expirationDate: string;
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

export interface IUserImage {
  userImgUrl: string;
}
