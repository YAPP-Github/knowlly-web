import { ContainedBadge, SvgIcon, Typograpy, Image } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import { IUserCoach, IUserPlayer } from '@/types/profile';

interface IUserDataProps {
  userInfo: IUserPlayer;
  coachInfo: IUserCoach;
}

const ProfileHeader = ({ userInfo, coachInfo }: IUserDataProps) => {
  const isCoach = userInfo.coach;
  const hasHttps = userInfo.portfolio?.slice(0, 4) === 'http';
  const userPortfolio = hasHttps ? userInfo?.portfolio : 'https://' + userInfo?.portfolio;
  const userProfileImg = userInfo.userImgUrl === null ? '/img/profile.png' : userInfo.userImgUrl;

  return (
    <Styled.ProfileContainer>
      <Styled.ProfileImg type="profile" src={userProfileImg} alt="프로필 이미지" />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">{userInfo.username}</Typograpy>

        <Styled.PlayerType>
          <ContainedBadge type="player">플레이어</ContainedBadge>
          {isCoach && <ContainedBadge type="coach">코치</ContainedBadge>}
        </Styled.PlayerType>

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="k_class" size={18} />
            <Typograpy variant="subtitle-4" textColor="gray6B">
              운영중인 클래스 {coachInfo.currentLectureCount}개
            </Typograpy>
          </Styled.IconWrapper>
        )}

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="review" size={18} />
            <Typograpy variant="subtitle-4" textColor="gray6B">
              후기 {coachInfo.reviewCount}개
            </Typograpy>
          </Styled.IconWrapper>
        )}

        {userInfo.portfolio && (
          <Styled.IconWrapper>
            <SvgIcon type="link" size={18}></SvgIcon>
            <a target="_blank" href={`${userPortfolio}`} rel="noopener noreferrer">
              <Typograpy variant="body-1" textColor="gray44">
                {userInfo.portfolio}
              </Typograpy>
            </a>
          </Styled.IconWrapper>
        )}
      </Styled.ProfileWrapper>
    </Styled.ProfileContainer>
  );
};

export default ProfileHeader;
