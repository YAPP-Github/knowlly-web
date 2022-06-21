import React from 'react';
import * as Styled from './ClassInfoStyle';
import { ContainedBadge } from '@components/Common';

const ClassInfo = () => {
  return (
    <Styled.Container>
      <div>
        <Styled.ClassInfoTitle>클래스 소개</Styled.ClassInfoTitle>
        <div>
          프랑스어를 완전 처음 접하시는 분들을 위해 함께 커리큘럼을 짜드려요. 간단하게 알파벳 연습도
          해보려고 합니다.
        </div>
      </div>

      <div>
        <Styled.ClassInfoTitle>가능한 시간</Styled.ClassInfoTitle>
        <span>5월 24일 (화)</span>
        <span>오후 6:00 - 오후 7:00</span>
      </div>

      <div>
        <Styled.ClassInfoTitle>클래스 사진</Styled.ClassInfoTitle>
        {/* TODO: 클래스 사진 컨테이너 구현 */}
      </div>

      <div>
        <Styled.ClassInfoTitle>클래스 태그</Styled.ClassInfoTitle>
        <ContainedBadge type="keyword">#프랑스어</ContainedBadge>
      </div>
    </Styled.Container>
  );
};

export default ClassInfo;
