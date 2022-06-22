import { Typograpy } from '@components/Common';
import React from 'react';
import * as Styled from './GuidelineStyle';
const Guideline = () => {
  const GUIDELINES = [
    {
      question: '클래스를 들으려면 어떤 절차를 거쳐야 하나요?',
      answer:
        '매칭 신청서를 작성해주세요. 코치가 가능한 일정을 등록해놓았으니, 그 중 하나를 선택하시면 됩니다.',
    },
    {
      question: '매칭이 거절되기도 하나요?',
      answer: '코치의 스케줄에 따라서, 혹은 여러명의 매칭 신청서가 들어왔을 때 거절할 수도 있어요.',
    },
    {
      question: '볼은 언제 차감되나요?',
      answer: '코치가 매칭을 수락한 이후 차감됩니다.',
    },
  ];
  return (
    <Styled.GuidelineContainer>
      <Typograpy variant="subtitle-2">안내 사항</Typograpy>
      {GUIDELINES.map(({ question, answer }) => (
        <Styled.QAContainer key={question}>
          <Typograpy variant="body-1">{question}</Typograpy>
          <Typograpy variant="body-1">{answer}</Typograpy>
        </Styled.QAContainer>
      ))}
    </Styled.GuidelineContainer>
  );
};

export default Guideline;
