import Link from 'next/link';
import { ContainedBadge, Image } from '@components/Common';
import { ILectureInfoData } from '@/types/lectureInfo';
import * as Styled from './LectureCardStyle';

interface ILectureCardProps {
  lectureData: ILectureInfoData;
}

const LectureCard = ({ lectureData }: ILectureCardProps) => {
  return (
    <li>
      <Link href={`/lecture-detail/${lectureData.id}`}>
        <Styled.LectureCardContainer>
          <Styled.LectureImageWrapper>
            <Image
              type="lecture-list"
              src={lectureData.coach.user.userImgUrl}
              alt={lectureData.introduce}
            />
          </Styled.LectureImageWrapper>
          <Styled.LectureInfoWrapper>
            <Styled.LectureIntroduce variant="subtitle-2">
              {lectureData.introduce}
            </Styled.LectureIntroduce>
            <Styled.LectureCoachName variant="body-2" textColor="gray8F">
              {lectureData.coach.user.username}
            </Styled.LectureCoachName>
            <Styled.LectureTags>
              {lectureData.tags?.map((tag) => (
                <ContainedBadge key={tag.id} type="category">
                  {tag.content}
                </ContainedBadge>
              ))}
            </Styled.LectureTags>
          </Styled.LectureInfoWrapper>
        </Styled.LectureCardContainer>
      </Link>
    </li>
  );
};

export default LectureCard;
