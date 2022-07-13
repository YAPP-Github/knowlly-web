import useLectureDetail from '@hooks/lecture/useLectureDetail';
import { useRouter } from 'next/router';
import React from 'react';
import * as Styled from './MatchingButtonStyle';

const MatchingButton = () => {
  const router = useRouter();
  const lectureId = Number(router.query.id);
  const type = 'coach';
  const userId = 1;

  const lectureDetail = useLectureDetail(lectureId);

  //신청 가능한 클래스
  const availableLecture = lectureDetail.data.lectures.filter(
    (lecture) => lecture.matched === false
  );

  //코치일 때 매칭 신청인 수
  const requestCount = availableLecture
    .map((lecture) => lecture.forms.filter((form) => form.state === 'REQUEST'))
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }).length;

  const matchedLecture = lectureDetail.data.lectures.filter((lecture) => lecture.matched === true);
  const myStatus = matchedLecture.filter((lecture) => lecture.matchedUser.id === userId);
  const isMatched = myStatus.length;

  const handleMatchingButtonClick = () => {
    if (type === String('coach')) {
      //안드로이드에서 제공하는 함수 적용 예정
      console.log('');
    } else {
      router.push(`/matching?id=${lectureId}`);
    }
  };

  const handleButtonText = () => {
    if (type === String('coach')) {
      return availableLecture.length === 0
        ? '가능한 시간을 등록해주세요.'
        : `매칭 신청인 보기 (${requestCount})`;
    } else {
      //가능한 시간대가 없는 경우
      if (availableLecture.length === 0) return '매칭 신청하기';
      //가능한 시간이 있는 경우
      if (isMatched) {
        //2. 신청 중 && 진행 중
        if (myStatus[0].state === 'ON_GOING' || myStatus[0].state == 'ON_BOARD')
          return '매칭 신청하기';
        //3. 이미 참여한 클래스
        if (myStatus[0].state === 'DONE') return '후기 작성하러가기';
      } else {
        //1. 매칭 신청 하지 않음
        return '매칭 신청하기';
      }
    }
  };

  return (
    <>
      <Styled.StyledButton variant="contained" size="big" _onClick={handleMatchingButtonClick}>
        {handleButtonText()}
      </Styled.StyledButton>
    </>
  );
};

export default MatchingButton;
