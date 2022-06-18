import { ContainedBadge, Typograpy } from '@components/Common';
import * as Styled from './ProfileHeaderStyle';
import theme from '@styles/theme';
const ProfileHeader = () => {
  return (
    <Styled.ProfileContainer>
      <Styled.ProfileImg src="" />
      <Styled.ProfileWrapper>
        <Typograpy variant="subtitle-1">유지민</Typograpy>
        <ContainedBadge type="player">플레이어</ContainedBadge>
        <Typograpy textColor={`${theme.color.gray['44']}`} variant="body-1">
          www.knowly.com
        </Typograpy>
      </Styled.ProfileWrapper>
    </Styled.ProfileContainer>
  );
};
export default ProfileHeader;
