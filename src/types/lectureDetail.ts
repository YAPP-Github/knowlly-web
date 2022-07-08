export interface ILectureDetailCoach {
  id: number;
  introduce: string;
  user: {
    coach: true;
    id: number;
    pushActive: true;
    username: string;
    ballCnt: number;
    intro: string;
    kakaoId: string;
    portfolio: string;
    identifier: string;
  };
}

export interface ILectureDetailCategory {
  categoryName: string;
  id: number;
}

export interface ILectureDetailImages {
  id: number;
  lectureImgUrl: string;
}

export interface ILectureDetailSchedule {
  startAt: string;
  endAt: string;
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
  coach: ILectureDetailCoach;
  category: ILectureDetailCategory;
  lectureImages: ILectureDetailImages[];
  lectures: ILectureDetailSchedule[];
  tags: ILectureDetailTags[];
}

export interface ILectureDetail {
  message: string;
  data: ILectureDetailData;
  timestamp: number;
}
