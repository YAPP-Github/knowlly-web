import { SvgIcon } from '@components/Common';
import React from 'react';
import * as Styled from './GuideStyle';

const Guide = () => {
  const GUIDELINES = [
    { text: '클래스 운영을 통해 볼을 획득하기!' },
    { text: '볼을 쌓아서 클래스 수강하기!' },
    { text: '적립된 볼을 통해 나의 성장 확인하기!' },
    { text: '클래스에 대한 기록을 볼로 증명하기!' },
  ];

  return (
    <Styled.GuideContainer>
      <div>지식 교환을 통해 볼을 쌓아보세요</div>
      {GUIDELINES.map((guideline) => (
        <>
          <SvgIcon type="round-check" />
          <span>{guideline.text}</span>
        </>
      ))}
      <img src={'/img/how-to-get-ball.png'} />
    </Styled.GuideContainer>
  );
};

export default Guide;
