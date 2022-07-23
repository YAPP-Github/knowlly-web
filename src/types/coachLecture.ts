import { ILectureDetailImages, ILectureDetailTags } from './lectureDetail';
import { IUserImage } from './profile';

export interface IPlayerUserMatchingForm {
  message: string;
  data: IPlayerUserForm;
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

export interface ICoachLectureForms {
  data: ICoachLectureFormsData[];
  message: string;
  timestamp: number;
}

export interface ICoachLectureFormsData {
  category: string;
  coach: ICoachData;
  id: number;
  introduce: string;
  lectureImages: ILectureDetailImages;
  lectures: ICoachLectureData[];
  price: number;
  tags: ILectureDetailTags;
  topic: string;
}

export interface ICoachData {
  currentLectureCount: number;
  id: number;
  introduce: string;
  reviewCount: number;
  user: IPlayerUser;
}

export interface ICoachLectureData {
  endAt: string;
  forms: IPlayerUserForm[];
  id: number;
  matched: boolean;
  matchedUser: string | null;
  reviewWritten: boolean;
  startAt: string;
  state: string;
}
