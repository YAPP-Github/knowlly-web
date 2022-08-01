export interface ILectureInfo {
  message: 'ok';
  data: ILectureInfoData[];
  timestamp: number;
}

export interface ILectureInfoData {
  id: number;
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
      userImgUrl: string;
    };
  };
  category: string;
  lectureImages: [
    {
      id: number;
      lectureImgUrl: string;
    }
  ];
  lectures: [
    {
      startAt: string;
      endAt: string;
    }
  ];
  tags: [
    {
      id: number;
      content: string;
    }
  ];
}

export interface ILectureInfiniteList {
  pageParams: (string | undefined)[];
  pages: ILecturePages[];
}

export interface ILecturePages {
  currentPage: number;
  data: ILectureInfoData[];
  message: string;
  pageSize: number;
  timestamp: number;
  totalElements: number;
  totalPage: number;
}
