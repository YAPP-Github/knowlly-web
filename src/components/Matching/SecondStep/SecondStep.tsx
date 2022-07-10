import { Button, TextArea, Typograpy } from '@components/Common';
import { playerMatchingState } from '@recoil/matching/atoms';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as Styled from './SecondStepStyle';
import { PageLayout } from '@components/Common/Layout';
import useApplyMatching from '@hooks/matching/useApplyMatching';

const SecondStep = () => {
  const [content, setContent] = useState('');
  const playerMatching = useRecoilValue(playerMatchingState);

  const handleIntroductionContent = (value: string) => {
    setContent(value);
  };

  const applyMatching = useApplyMatching(playerMatching.scheduleId);

  const handleNextButtonClick = () => {
    const payload = { scheduleId: playerMatching.scheduleId, content: content };
    applyMatching.mutate(payload);
  };

  return (
    <>
      <PageLayout isSpacing>
        <Styled.TextWrapper>
          <Typograpy variant="subtitle-2">소개 작성</Typograpy>
          <Typograpy variant="body-2" textColor="gray8F">
            간단한 소개와 궁금한 내용을 적어주세요.
          </Typograpy>
        </Styled.TextWrapper>
        <TextArea value={content} maxLength={500} _onInputEntered={handleIntroductionContent} />
      </PageLayout>
      <Styled.ButtonWrapper>
        <Typograpy variant="body-2" textColor="primary">
          한번 신청한 매칭은 취소나 변경이 불가능해요.
        </Typograpy>
        <Typograpy variant="body-2" textColor="primary">
          신중하게 선택해주세요.
        </Typograpy>
        <Button _onClick={handleNextButtonClick} disabled={content.length === 0}>
          매칭 신청 완료하기
        </Button>
      </Styled.ButtonWrapper>
    </>
  );
};

export default SecondStep;
