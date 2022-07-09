export interface IUserImage {
  userImgUrl: string;
}

export interface IUserPlayer {
  coach: boolean;
  id: number;
  pushActive: boolean;
  username: string;
  ballCnt: number;
  intro: string;
  kakaoId: string;
  portfolio: string;
  identifier: string;
}

export interface IUserCoach {
  id: number;
  introduce: string;
  user: IUserPlayer;
}

export interface IProfile {
  message: string;
  data: {
    coach: IUserCoach;
    user: IUserPlayer;
    userImage: IUserImage;
  };
  timestamp: number;
}
