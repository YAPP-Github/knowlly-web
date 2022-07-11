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

//운영클래스
import { IUserCoach, IUserPlayer } from './profile';
import { ILectureDetailTags, ILectureDetailImages } from './lectureDetail';

export interface ILectureForms {
  id: number;
  userImage: IUserImage;
  content: string;
  user: IUserPlayer;
  state: string;
  expirationDate: string;
}
export interface ILectures {
  id: number;
  matched: true;
  reviewWritten: true;
  startAt: string;
  endAt: string;
  state: string;
  forms: ILectureForms[];
  matchedUser: IUserPlayer;
}

interface ICoachLectureData {
  id: number;
  topic: string;
  introduce: string;
  price: number;
  coach: IUserCoach;
  category: string;
  lectureImages: ILectureDetailImages[];
  lectures: ILectures[];
  tags: ILectureDetailTags[];
}
export interface ICoachLecture {
  message: string;
  data: ICoachLectureData[];
  timestamp: number;
}
