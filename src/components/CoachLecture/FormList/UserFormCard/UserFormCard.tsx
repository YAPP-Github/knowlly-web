import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Image, Typograpy } from '@components/Common';
import { IPlayerUser } from '@/types/coachLecture';
import * as Styled from './UserFormCardStyle';

interface IUserFormCardProps {
  formId: number;
  user: IPlayerUser;
  content: string;
}

const UserFormCard = ({ formId, user, content }: IUserFormCardProps) => {
  const router = useRouter();

  const handleMoveToFormDetailPage = useCallback(
    (formId: number) => {
      router.push(`/coach-lecture/form-detail/${formId}`);
    },
    [formId]
  );

  useEffect(() => {
    router.prefetch(`/coach-lecture/form-detail/${formId}`);
  }, []);

  return (
    <Styled.UserFormCardContainer>
      <Styled.userProfileWrapper>
        <Image type="profile" src={user.userImgUrl} alt={user.intro} />
      </Styled.userProfileWrapper>
      <div>
        <Styled.userInfoWrapper>
          <Typograpy variant="subtitle-2">{user.username}</Typograpy>
          <Typograpy variant="body-2" textColor="gray44">
            {user.username}
          </Typograpy>
          <Typograpy variant="body-1" textColor="gray8F">
            {content}
          </Typograpy>
        </Styled.userInfoWrapper>
        <Button
          size="xx-small"
          _onClick={() => {
            handleMoveToFormDetailPage(formId);
          }}
        >
          신청서 바로가기
        </Button>
      </div>
    </Styled.UserFormCardContainer>
  );
};

export default UserFormCard;
