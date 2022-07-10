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
  userImgUrl: string;
}

export interface IUserCoach {
  id: number;
  introduce: string;
  user: IUserPlayer;
  currentLectureCount: number;
  reviewCount: number;
}

export interface IProfile {
  message: string;
  data: {
    coach: IUserCoach;
    user: IUserPlayer;
    currentLectureCount: number;
    reviewCount: number;
  };
  timestamp: number;
}

//유저의 코치 리뷰
export interface ICoachReviewData {
  public: boolean;
  writer: IUserPlayer;
  reviewee: {
    id: number;
    introduce: string;
    user: IUserPlayer;
  };
  content: string;
  writtenDate: string;
}

export interface ICoachReview {
  message: string;
  data: ICoachReviewData[];
  currentPage: number;
  totalPage: number;
  pageSize: number;
  timestamp: number;
  totalElements: number;
}
