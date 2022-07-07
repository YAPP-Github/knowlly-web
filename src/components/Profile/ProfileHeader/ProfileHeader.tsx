import { ContainedBadge, SvgIcon, Typograpy, Image } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import Link from 'next/link';
const ProfileHeader = () => {
  const isCoach = true;

  return (
    <Styled.ProfileContainer>
      <Image type="profile" src="img/profile.png" alt="프로필 이미지" />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">유지민</Typograpy>

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

        <Styled.IconWrapper>
          <SvgIcon type="link" size={18}></SvgIcon>
          <Link href={'https://www.knowlly.com/'} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <Typograpy variant="body-1" textColor="gray44">
                www.knowly.com
              </Typograpy>
            </a>
          </Link>
        </Styled.IconWrapper>
      </Styled.ProfileWrapper>
    </Styled.ProfileContainer>
  );
};

export default ProfileHeader;
