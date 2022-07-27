import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { MatchingButton } from '../MatchingStyle';
import React from 'react';
import * as Styled from './LastStepStyle';

const LastStep = () => {
  const handleMatchingSuccessBtnClick = () => {
    window.Android?.navigateUp();
  };

  return (
    <>
      <PageLayout isSpacing>
        <Styled.Title>
          <Typograpy variant="headline-3">매칭 신청 완료!</Typograpy>
        </Styled.Title>
        <Typograpy variant="body-1" textColor="gray8F">
          클래스 매칭 신청이 완료되었습니다.
        </Typograpy>
        <Typograpy variant="body-1" textColor="gray8F">
          코치가 매칭 신청서를 확인하고 응답하면,
        </Typograpy>
        <Typograpy variant="body-1" textColor="gray8F">
          매칭 결과를 푸시 알림으로 알려드려요!
        </Typograpy>
      </PageLayout>

      <Styled.BackgroundImage>
        <MatchingButton _onClick={handleMatchingSuccessBtnClick}>확인</MatchingButton>
      </Styled.BackgroundImage>
    </>
  );
};

export default LastStep;
