import { ContainedBadge, SvgIcon, Typograpy } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import Link from 'next/link';

const ProfileHeader = () => {
  const isCoach = true;
  return (
    <Styled.ProfileContainer>
      <Styled.ProfileImg src={`/img/profile.png`} />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">유지민</Typograpy>
        <Styled.PlayerType>
          <ContainedBadge type="player">플레이어</ContainedBadge>
          {isCoach && <ContainedBadge type="coach">코치</ContainedBadge>}
        </Styled.PlayerType>
        {isCoach && (
          <Styled.ProfileLink>
            <SvgIcon type="k_class" size={18} />
            <Typograpy variant="subtitle-4">운영중인 클래스 2개</Typograpy>
          </Styled.ProfileLink>
        )}
        {isCoach && (
          <Styled.ProfileLink>
            <SvgIcon type="review" size={18} />
            <Typograpy variant="subtitle-4">후기 2개</Typograpy>
          </Styled.ProfileLink>
        )}
        <Styled.ProfileLink>
          <SvgIcon type="link" size={18}></SvgIcon>
          <Typograpy variant="body-1" textColor="gray44">
            <Link href={'https://www.knowlly.com/'} passHref>
              <a target="_blank" rel="noopener noreferrer">
                www.knowly.com
              </a>
            </Link>
          </Typograpy>
        </Styled.ProfileLink>
      </Styled.ProfileWrapper>
    </Styled.ProfileContainer>
  );
};

export default ProfileHeader;
