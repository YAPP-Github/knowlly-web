import { ContainedBadge, SvgIcon, Typograpy, Image } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import Link from 'next/link';
import { IUserCoach, IUserPlayer } from '@/types/profile';

interface IUserDataProps {
  userInfo: IUserPlayer;
  coachInfo: IUserCoach;
}

const ProfileHeader = ({ userInfo, coachInfo }: IUserDataProps) => {
  const isCoach = userInfo.coach;

  return (
    <Styled.ProfileContainer>
      <Image type="profile" src={userInfo.userImgUrl} alt="프로필 이미지" />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">{userInfo.username}</Typograpy>

        <Styled.PlayerType>
          <ContainedBadge type="player">플레이어</ContainedBadge>
          {isCoach && <ContainedBadge type="coach">코치</ContainedBadge>}
        </Styled.PlayerType>

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="k_class" size={18} />
            <Typograpy variant="subtitle-4">
              운영중인 클래스 {coachInfo.currentLectureCount}개
            </Typograpy>
          </Styled.IconWrapper>
        )}

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="review" size={18} />
            <Typograpy variant="subtitle-4">후기 {coachInfo.reviewCount}개</Typograpy>
          </Styled.IconWrapper>
        )}

        {userInfo.portfolio && (
          <Styled.IconWrapper>
            <SvgIcon type="link" size={18}></SvgIcon>
            <Link href={`${userInfo.portfolio}`} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Typograpy variant="body-1" textColor="gray44">
                  {userInfo.portfolio}
                </Typograpy>
              </a>
            </Link>
          </Styled.IconWrapper>
        )}
      </Styled.ProfileWrapper>
    </Styled.ProfileContainer>
  );
};

export default ProfileHeader;
