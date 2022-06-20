import { ContainedBadge, SvgIcon, Typograpy } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import theme from '@styles/theme';
import Link from 'next/link';
const ProfileHeader = () => {
  return (
    <Styled.ProfileContainer>
      <Styled.ProfileImg src={`/img/profile.png`} />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">유지민</Typograpy>
        <ContainedBadge type="player">플레이어</ContainedBadge>
        <Styled.ProfileLink>
          <SvgIcon type="link" size={18}></SvgIcon>
          <Typograpy textColor={`${theme.color.gray['44']}`} variant="body-1">
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
