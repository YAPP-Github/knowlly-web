import { Modal, Typograpy } from '@components/Common';
import useAuth from '@hooks/auth/useAuth';
import useLectureDetail from '@hooks/lecture/useLectureDetail';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as Styled from './MatchingButtonStyle';

const MatchingButton = () => {
  const router = useRouter();
  const lectureId = Number(router.query.id);

  const user = useAuth();
  const userId = 1;

  const { lectureDetail } = useLectureDetail(lectureId);

  //player인지 coach인지
  const userType = lectureDetail.data.coach.id === userId ? 'coach' : 'player';

  //신청 가능한 클래스
  const availableLecture = lectureDetail.data.lectures.filter(
    (lecture) => lecture.matched === false
  );

  //코치일 때 매칭 신청인 수
  const request = availableLecture.map((lecture) =>
    lecture.forms.filter((form) => form.state === 'REQUEST')
  );

  const requestCount = request.length;

  //플레이어 일 때 본인이 신청한 클래스 인지
  const totalRequest =
    requestCount === 0
      ? []
      : request.reduce((acc, cur) => {
          return acc.concat(cur);
        });

  const playerRequest = totalRequest.filter((user) => user.user.id === userId)[0];
  const playerRequestState = playerRequest ? playerRequest.state : 'NONE';

  //이미 매칭된 경우
  const matchedLecture = lectureDetail.data.lectures.filter((lecture) => lecture.matched === true); //빈 배열이 리턴될 수 있음
  const matchedStatus =
    matchedLecture.length === 0
      ? []
      : matchedLecture.filter((lecture) => lecture.matchedUser.id === userId);
  const isMatched = matchedStatus.length;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const userBallCnt = user?.data.user.ballCnt;

  const handleMatchingButtonClick = () => {
    if (userBallCnt === 0) {
      setIsModalOpen(true);
      return;
    }
    if (userType === String('coach')) {
      //안드로이드에서 제공하는 함수 적용 예정
      console.log('');
    } else {
      //안드로이드와 연동 예정
      if (isMatched && matchedStatus[0].state === 'DONE') router.push(`/review/${lectureId}`);
      else router.push(`/matching?id=${lectureId}`);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (userType === String('player')) {
      if (availableLecture.length === 0) setDisabled(true);

      //매칭 x request o
      if (!isMatched && playerRequestState === 'REQUEST') {
        setDisabled(true);
      }

      if (isMatched && matchedStatus[0].state !== 'DONE')
        //onboard && ongoing
        setDisabled(true);
    }
  });

  const handleButtonText = () => {
    if (userType === String('coach')) {
      return availableLecture.length === 0
        ? '가능한 시간을 등록해주세요.'
        : `매칭 신청인 보기 (${requestCount})`;
    } else {
      //가능한 시간대가 없는 경우
      if (availableLecture.length === 0) return '매칭 신청하기';
      //가능한 시간이 있는 경우
      if (isMatched) {
        //2. 신청 중 && 진행 중
        if (matchedStatus[0].state === 'ON_GOING' || matchedStatus[0].state == 'ON_BOARD')
          return '매칭 신청하기';
        //3. 이미 참여한 클래스
        if (matchedStatus[0].state === 'DONE') return '후기 작성하러가기';
      } else {
        //1. 매칭 신청 하지 않음
        return '매칭 신청하기';
      }
    }
  };

  return (
    <Styled.ButtonWrapper>
      {isModalOpen && (
        <Modal _onClose={handleModalClose}>
          <Styled.ModalTextWrapper>
            <Typograpy variant="subtitle-3">클래스 수강을 위한 볼이 없어요.</Typograpy>
            <Typograpy variant="subtitle-3">클래스 코칭을 통해 볼을 얻고</Typograpy>
            <Typograpy variant="subtitle-3">클래스 수강을 해보세요.</Typograpy>
          </Styled.ModalTextWrapper>
        </Modal>
      )}
      <Styled.StyledButton
        variant="contained"
        size="big"
        _onClick={handleMatchingButtonClick}
        disabled={disabled}
      >
        {handleButtonText()}
      </Styled.StyledButton>
    </Styled.ButtonWrapper>
  );
};

export default MatchingButton;
