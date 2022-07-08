import React from 'react';
import * as Styled from './LectureInfoStyles';
import { ContainedBadge, Typograpy } from '@components/Common';
import LectureImages from './LectureImages';
import { ILectureDetailData } from '@/types/lectureDetail';

interface ILectureInfoProps {
  lectureInfo: ILectureDetailData;
}

const LectureInfo = ({ lectureInfo }: ILectureInfoProps) => {
  const availableTime = lectureInfo.lectures.filter((lecture) => lecture.state === 'ONGOING');

  return (
    <Styled.LectureInfoContainer>
      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 소개</Typograpy>
        <Typograpy variant="body-1" textColor="gray6B">
          {lectureInfo.introduce}
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
        <LectureImages images={lectureInfo.lectureImages} />
      </Styled.Section>

      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 태그</Typograpy>
        <Styled.LectureTag>
          {lectureInfo.tags.map((tag) => (
            <ContainedBadge type="keyword" key={tag.id}>
              {tag.content}
            </ContainedBadge>
          ))}
        </Styled.LectureTag>
      </Styled.Section>
    </Styled.LectureInfoContainer>
  );
};

export default LectureInfo;
