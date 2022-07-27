import { IUserCoach, IUserPlayer } from './profile';

export interface IUserImage {
  userImgUrl: string;
}
export interface ILectureDetailImages {
  id: number;
  lectureImgUrl: string;
}

export interface ILectureDetailSchedule {
  endAt: string;
  forms: ILectureForm[];
  id: number;
  matched: boolean;
  matchedUser: IUserPlayer;
  reviewWritten: boolean;
  startAt: string;
  state: string;
}

export interface ILectureDetailTags {
  id: number;
  content: string;
}

export interface ILectureForm {
  id: number;
  userImage: IUserImage;
  content: string;
  user: IUserPlayer;
  state: string;
  expirationDate: string;
  startAt: string;
  endAt: string;
}

export interface ILectures {
  id: number;
  matched: boolean;
  reviewWritten: boolean;
  startAt: string;
  endAt: string;
  state: string;
  forms: ILectureForm[];
  matchedUser: IUserPlayer;
}

export interface ILectureDetailData {
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

export interface ILectureDetail {
  message: string;
  data: ILectureDetailData;
  timestamp: number;
}
