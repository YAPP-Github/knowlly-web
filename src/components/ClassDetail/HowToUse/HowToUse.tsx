import React from 'react';
import { ClassInfoTitle } from '../ClassInfo/ClassInfoStyle';
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
    <Styled.HowToUseContainer>
      <ClassInfoTitle>이용 방법</ClassInfoTitle>
      {INSTRUCTIONS.map(({ idx, text }) => (
        <div key={idx}>
          {idx} {text}
        </div>
      ))}
    </Styled.HowToUseContainer>
  );
};

export default HowToUse;
