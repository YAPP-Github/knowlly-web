import { IUserCoach } from './profile';

export interface ILectureDetailImages {
  id: number;
  lectureImgUrl: string;
}

export interface ILectureDetailSchedule {
  endAt: string;
  id: number;
  reviewWritten: false;
  startAt: string;
  state: string;
}

export interface ILectureDetailTags {
  id: number;
  content: string;
}

export interface ILectureDetailData {
  id: number;
  topic: string;
  introduce: string;
  price: number;
  coach: IUserCoach;
  category: string;
  lectureImages: ILectureDetailImages[];
  lectures: ILectureDetailSchedule[];
  tags: ILectureDetailTags[];
}

export interface ILectureDetail {
  message: string;
  data: ILectureDetailData;
  timestamp: number;
}
