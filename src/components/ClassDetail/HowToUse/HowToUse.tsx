import { Typograpy } from '@components/Common';
import React from 'react';
import * as Styled from './HowToUseStyle';

const HowToUse = () => {
  const INSTRUCTIONS = [
    { idx: '01', text: '원하는 클래스의 매칭 신청을 클릭' },
    { idx: '02', text: '코치가 입력한 시간 중 가능한 시간 1개 선택하기.' },
    { idx: '03', text: '코치에게 보낼 소개, 연락처 작성하기. ' },
    { idx: '04', text: '매칭 신청서를 코치에게 보내기' },
    { idx: '05', text: '코치의 수락 이후 클래스 진행' },
  ];
  return (
    <Styled.Container>
      <Typograpy variant="subtitle-2">이용 방법</Typograpy>
      {INSTRUCTIONS.map(({ idx, text }) => (
        <Styled.Wrapper key={idx}>
          <Typograpy variant="subtitle-4">{idx}.</Typograpy>
          <Typograpy variant="body-1">{text}</Typograpy>
        </Styled.Wrapper>
      ))}
    </Styled.Container>
  );
};

export default HowToUse;
