import { memo } from 'react';
import { Image, Typograpy } from '@components/Common';
import { IPlayerUser } from '@/types/coachLecture';
import * as Styled from './PlayerUserStyle';

interface IPlayerUserProps {
  userInfo: IPlayerUser;
}

const PlayerUser = memo(({ userInfo }: IPlayerUserProps) => {
  return (
    <Styled.PlayerUserContainer>
      <Styled.PlayerUserProfileWrapper>
        {userInfo?.userImgUrl && (
          <Image
            type="form-profile"
            src={userInfo.userImgUrl}
            alt={`${userInfo.username}님의 프로필 이미지`}
          />
        )}
        <Typograpy variant="subtitle-4">{userInfo?.username}</Typograpy>
      </Styled.PlayerUserProfileWrapper>
      <Typograpy variant="body-1" textColor="gray6B">
        {userInfo?.intro}
      </Typograpy>
    </Styled.PlayerUserContainer>
  );
});

export default PlayerUser;
