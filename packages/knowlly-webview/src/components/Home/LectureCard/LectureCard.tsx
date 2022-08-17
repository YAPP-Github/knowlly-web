import { ContainedBadge, Image, SvgIcon } from '@components/Common';
import { ILectureInfoData } from '@/types/lectureInfo';
import * as Styled from './LectureCardStyle';

interface ILectureCardProps {
  lectureData: ILectureInfoData;
}

const LectureCard = ({ lectureData }: ILectureCardProps) => {
  const handleMoveToLectureDetailPageClick = () => {
    if (window.Android) window.Android?.navigateToLecture(lectureData.id);
  };

  return (
    <Styled.LectureCardContainer onClick={handleMoveToLectureDetailPageClick}>
      <Styled.LectureImageWrapper>
        {lectureData.lectureImages.length ? (
          <Image
            type="lecture-list"
            src={lectureData.lectureImages[0]?.lectureImgUrl}
            alt={lectureData.introduce}
          />
        ) : (
          <SvgIcon type="lecture-default" size={88} />
        )}
      </Styled.LectureImageWrapper>
      <Styled.LectureInfoWrapper>
        <Styled.LectureTopic variant="subtitle-2">{lectureData.topic}</Styled.LectureTopic>
        <Styled.LectureCoachName variant="body-2" textColor="gray8F">
          {lectureData.coach.user.username}
        </Styled.LectureCoachName>
        <ContainedBadge type="category">{lectureData.category}</ContainedBadge>
      </Styled.LectureInfoWrapper>
    </Styled.LectureCardContainer>
  );
};

export default LectureCard;
