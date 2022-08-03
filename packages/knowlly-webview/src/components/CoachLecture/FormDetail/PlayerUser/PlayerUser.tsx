import { memo } from 'react';
import { Image, Typograpy } from '@components/Common';
import { PlayerInfo, Loading } from '@components/CoachLecture';
import { IPlayerUser } from '@/types/coachLecture';
import * as Styled from './PlayerUserStyle';

interface IPlayerUserInfoProps {
  userInfo: IPlayerUser;
  isFetching: boolean;
}

const Info = memo(({ userInfo, isFetching }: IPlayerUserInfoProps) => {
  return (
    <PlayerInfo title="플레이어 정보">
      {isFetching ? (
        <Loading.PlayerUser />
      ) : (
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
      )}
    </PlayerInfo>
  );
});

interface IPlayerUserCommentProps {
  comment: string;
  isFetching: boolean;
}

const Comment = memo(({ comment, isFetching }: IPlayerUserCommentProps) => {
  return (
    <PlayerInfo title="플레이어의 코멘트">
      {isFetching ? (
        <Loading.Text />
      ) : (
        <Typograpy variant="body-1" textColor="gray6B">
          {comment}
        </Typograpy>
      )}
    </PlayerInfo>
  );
});

const PlayerUser = { Info, Comment };

export default PlayerUser;
