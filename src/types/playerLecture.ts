import { ILectureForms, ILectures, ICoachLectureData } from './coachLecture';

export interface IPlayerLectureData {
  form: ILectureForms;
  lecture: ILectures;
  lectureInformation: ICoachLectureData;
}
export interface IPlayerLecture {
  message: string;
  data: IPlayerLectureData[];
  timestamp: number;
}
