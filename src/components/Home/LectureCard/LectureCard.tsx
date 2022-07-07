import Image from 'next/image';
import { ContainedBadge } from '@components/Common';
import { ILectureInfoData } from '@/types/lectureInfo';
import * as Styled from './LectureCardStyle';

interface ILectureCardProps {
  lectureData: ILectureInfoData;
}

const LectureCard = ({ lectureData }: ILectureCardProps) => {
  return (
    <Styled.LectureCardContainer>
      <Styled.LectureImageWrapper>
        <Image src="/img/profile.png" width={88} height={88} />
      </Styled.LectureImageWrapper>
      <div>
        <Styled.LectureIntroduce variant="subtitle-2">
          {lectureData.introduce}
        </Styled.LectureIntroduce>
        <Styled.LectureCoachName variant="body-2" textColor="gray8F">
          {lectureData.coach.user.username}
        </Styled.LectureCoachName>
        <ContainedBadge type="category">뱃지</ContainedBadge>
      </div>
    </Styled.LectureCardContainer>
  );
};

export default LectureCard;
