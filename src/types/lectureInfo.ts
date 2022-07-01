export interface ILectureInfo {
  message: 'ok';
  data: ILectureInfoData[];
  timestamp: number;
}

export interface ILectureInfoData {
  topic: string;
  introduce: string;
  price: number;
  coach: {
    id: number;
    introduce: string;
    user: {
      id: number;
      username: string;
      ballCnt: number;
      intro: string;
      kakaoId: string;
      portfolio: string | null;
      identifier: string;
      coach: boolean;
      pushActive: boolean;
    };
  };
  category: {
    id: number;
    categoryName: '기타';
  };
}
