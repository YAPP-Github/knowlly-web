export const lectureinfo = {
  message: 'ok',
  data: [
    {
      id: 5,
      topic: '요리 클래스',
      introduce: '맛있는 요리 만들기',
      price: 1,
      coach: {
        id: 1,
        introduce: '안녕하세요. 테스트1 코치입니다.',
        user: {
          id: 1,
          username: '테스트1',
          ballCnt: 1,
          intro: '안녕하세요. 저는 테스트1이라고 합니다.',
          kakaoId: 'kakao_test1',
          portfolio: null,
          identifier: 'kakao_identifier1',
          coach: true,
          pushActive: true,
          userImgUrl:
            'https://knowllydev-media.hkpark.net/user-image/8/b44a0790-9565-42af-9acc-7dd145809bff_174ce802b5686c72.jpg',
        },
      },
      category: 'ETC',
      lectureImages: [
        {
          id: 6,
          lectureImgUrl: 'http://lecture5.img.url',
        },
      ],
      tags: [],
      lectures: [],
    },
    {
      id: 3,
      topic: '그래픽 디자인',
      introduce: '그래픽을 그래그래',
      price: 1,
      coach: {
        id: 3,
        introduce: '안녕하세요. 테스트4 코치입니다.',
        user: {
          id: 4,
          username: '테스트4',
          ballCnt: 5,
          intro: '안녕하세요. 저는 테스트4이라고 합니다.',
          kakaoId: 'kakao_test4',
          portfolio: null,
          identifier: 'identifier4',
          coach: true,
          pushActive: true,
          userImgUrl:
            'https://knowllydev-media.hkpark.net/user-image/8/b44a0790-9565-42af-9acc-7dd145809bff_174ce802b5686c72.jpg',
        },
      },
      category: 'DESIGN',
      lectureImages: [
        {
          id: 4,
          lectureImgUrl: 'http://lecture3.img.url',
        },
      ],
      tags: [
        {
          id: 5,
          content: '전문가',
        },
      ],
      lectures: [
        {
          id: 5,
          startAt: '2022-06-08T13:44:10',
          endAt: '2022-06-13T14:44:04',
          state: 'DONE',
          reviewWritten: false,
        },
      ],
    },
    {
      id: 2,
      topic: '자바 개발',
      introduce: '자바를 자바라',
      price: 1,
      coach: {
        id: 2,
        introduce: '안녕하세요. 테스트3 코치입니다.',
        user: {
          id: 3,
          username: '테스트3',
          ballCnt: 3,
          intro: '안녕하세요. 저는 테스트3이라고 합니다.',
          kakaoId: 'kakao_test3',
          portfolio: null,
          identifier: 'identifier3',
          coach: true,
          pushActive: false,
          userImgUrl:
            'https://knowllydev-media.hkpark.net/user-image/8/b44a0790-9565-42af-9acc-7dd145809bff_174ce802b5686c72.jpg',
        },
      },
      category: 'DEVELOP',
      lectureImages: [
        {
          id: 3,
          lectureImgUrl: 'http://lecture2.img.url',
        },
        {
          id: 7,
          lectureImgUrl: 'http://lecture2.img2.url',
        },
      ],
      tags: [
        {
          id: 3,
          content: '언어',
        },
        {
          id: 4,
          content: '자바개발',
        },
      ],
      lectures: [
        {
          id: 4,
          startAt: '2022-06-12T13:44:10',
          endAt: '2022-06-12T14:44:04',
          state: 'ON_BOARD',
          reviewWritten: false,
        },
      ],
    },
    {
      id: 1,
      topic: '마케팅 수업',
      introduce: '효과적인 마케팅에 대해 배웁니다',
      price: 1,
      coach: {
        id: 1,
        introduce: '안녕하세요. 테스트1 코치입니다.',
        user: {
          id: 1,
          username: '테스트1',
          ballCnt: 1,
          intro: '안녕하세요. 저는 테스트1이라고 합니다.',
          kakaoId: 'kakao_test1',
          portfolio: null,
          identifier: 'kakao_identifier1',
          coach: true,
          pushActive: true,
          userImgUrl:
            'https://knowllydev-media.hkpark.net/user-image/8/b44a0790-9565-42af-9acc-7dd145809bff_174ce802b5686c72.jpg',
        },
      },
      category: 'MARKETING',
      lectureImages: [
        {
          id: 2,
          lectureImgUrl: 'http://lecture1.img2.url',
        },
        {
          id: 1,
          lectureImgUrl: 'http://lecture1.img.url',
        },
      ],
      tags: [
        {
          id: 1,
          content: '마케팅전문',
        },
        {
          id: 2,
          content: '쉬워요',
        },
      ],
      lectures: [
        {
          id: 1,
          startAt: '2022-06-08T13:44:10',
          endAt: '2022-06-08T14:44:04',
          state: 'DONE',
          reviewWritten: false,
        },
        {
          id: 2,
          startAt: '2022-06-09T13:44:10',
          endAt: '2022-06-09T14:44:04',
          state: 'ON_GOING',
          reviewWritten: false,
        },
        {
          id: 3,
          startAt: '2022-06-10T13:44:10',
          endAt: '2022-06-10T14:44:04',
          state: 'ON_BOARD',
          reviewWritten: false,
        },
      ],
    },
  ],
  timestamp: 1657368449333,
  currentPage: 0,
  totalPage: 1,
  pageSize: 10,
  totalElements: 4,
};
