import { ContainedBadge, SvgIcon, Typograpy, Image } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import Link from 'next/link';
import { IUserImage, IUserPlayer } from '@/types/profile';

interface IUserInfoProps {
  userInfo: IUserPlayer;
  userImage: IUserImage;
}

const ProfileHeader = ({ userInfo, userImage }: IUserInfoProps) => {
  const isCoach = userInfo.coach;

  return (
    <Styled.ProfileContainer>
      <Image type="profile" src={userImage.userImgUrl} alt="프로필 이미지" />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">{userInfo.username}</Typograpy>

        <Styled.PlayerType>
          <ContainedBadge type="player">플레이어</ContainedBadge>
          {isCoach && <ContainedBadge type="coach">코치</ContainedBadge>}
        </Styled.PlayerType>

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="k_class" size={18} />
            <Typograpy variant="subtitle-4">운영중인 클래스 2개</Typograpy>
          </Styled.IconWrapper>
        )}

        {isCoach && (
          <Styled.IconWrapper>
            <SvgIcon type="review" size={18} />
            <Typograpy variant="subtitle-4">후기 2개</Typograpy>
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
