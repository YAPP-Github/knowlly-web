import React from 'react';
import * as Styled from './LectureInfoStyles';
import { ContainedBadge, Typograpy } from '@components/Common';
import LectureImages from './LectureImages';
import { ILectureDetailData } from '@/types/lectureDetail';
import { formatDate, formatTime, getLectureTime } from '@utils';
interface ILectureInfoProps {
  lectureInfo: ILectureDetailData;
}

const LectureInfo = ({ lectureInfo }: ILectureInfoProps) => {
  const availableTimes = lectureInfo.lectures.filter((lecture) => lecture.matched == false);

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
        {availableTimes.length === 0 && (
          <Typograpy variant="body-2" textColor="gray6B">
            가능한 시간대가 없습니다.
          </Typograpy>
        )}
        {availableTimes.map((availableTime) => (
          <Styled.AvailableTime key={availableTime.id}>
            <Typograpy variant="button-1">{formatDate(availableTime.startAt)}</Typograpy>
            <Typograpy variant="body-2" textColor="gray6B">
              {formatTime(availableTime.startAt)} (
              {getLectureTime(availableTime.startAt, availableTime.endAt)}시간 수업)
            </Typograpy>
          </Styled.AvailableTime>
        ))}
      </Styled.Section>

      <Styled.Section>
        <Typograpy variant="subtitle-2">클래스 사진</Typograpy>
        <LectureImages lectureImages={lectureInfo.lectureImages} />
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
