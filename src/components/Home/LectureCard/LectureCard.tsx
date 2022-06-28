import Image from 'next/image';
import { ContainedBadge } from '@components/Common';
import * as Styled from './LectureCardStyle';

const LectureCard = () => {
  return (
    <Styled.LectureCardContainer>
      <Styled.LectureImageWrapper>
        <Image src={'/img/profile.png'} width={88} height={88} />
      </Styled.LectureImageWrapper>
      <Styled.LectureInfoWrapper>
        <Styled.LectureTopic variant="subtitle-2">JAVA 코딩 기초</Styled.LectureTopic>
        <Styled.LectureCoachName variant="body-2" textColor="gray8F">
          JAVA 코딩 기초
        </Styled.LectureCoachName>
        <ContainedBadge type="category">뱃지</ContainedBadge>
      </Styled.LectureInfoWrapper>
    </Styled.LectureCardContainer>
  );
};

export default LectureCard;
