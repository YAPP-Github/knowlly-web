import React from 'react';
import * as Styled from './LectureInfoStyles';
import { ContainedBadge, Typograpy } from '@components/Common';
import LectureImages from './LectureImages';

const LectureInfo = () => {
  return (
    <Styled.LectureInfoContainer>
      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 소개</Typograpy>
        <Typograpy variant="body-1" textColor="gray6B">
          프랑스어를 완전 처음 접하시는 분들을 위해 함께 커리큘럼을 짜드려요. 간단하게 알파벳 연습도
          해보려고 합니다.
        </Typograpy>
      </Styled.Section>

      <Styled.Section>
        <Typograpy variant="subtitle-2">가능한 시간</Typograpy>
        <Styled.AvailableTime>
          <Typograpy variant="button-1">5월 24일 (화)</Typograpy>
          <Typograpy variant="body-2" textColor="gray6B">
            오후 6:00 (3시간 수업)
          </Typograpy>
        </Styled.AvailableTime>
      </Styled.Section>

      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 사진</Typograpy>
        <LectureImages />
      </Styled.Section>

      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 태그</Typograpy>
        <Styled.LectureTag>
          <ContainedBadge type="keyword">#기초</ContainedBadge>
          <ContainedBadge type="keyword">#프랑스어회화</ContainedBadge>
        </Styled.LectureTag>
      </Styled.Section>
    </Styled.LectureInfoContainer>
  );
};

export default LectureInfo;
