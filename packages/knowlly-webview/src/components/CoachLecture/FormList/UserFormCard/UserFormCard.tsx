import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Image, Typograpy } from '@components/Common';
import { formatDate, getLectureTime } from '@utils';
import { IPlayerUserForm } from '@/types/coachLecture';
import * as Styled from './UserFormCardStyle';

interface IUserFormCardProps {
  formId: number;
  userForm: IPlayerUserForm;
}

const UserFormCard = ({ formId, userForm }: IUserFormCardProps) => {
  const router = useRouter();

  const { user, content, startAt, endAt } = userForm;

  const handleMoveToFormDetailPage = useCallback(
    (formId: number) => {
      router.push(`/coach-lecture/form-detail/${formId}`);
    },
    [formId]
  );

  const scheduleSentByPlayer = useMemo(() => {
    const startDate = formatDate(startAt);
    const lectureTime = getLectureTime(startAt, endAt);

    return `${startDate} (${lectureTime}시간 수업)`;
  }, [formId]);

  useEffect(() => {
    router.prefetch(`/coach-lecture/form-detail/${formId}`);
  }, [formId]);

  return (
    <Styled.UserFormCardContainer>
      <Styled.userProfileWrapper>
        <Image type="coach-profile" src={user.userImgUrl} alt={user.intro} />
      </Styled.userProfileWrapper>
      <div>
        <Styled.userInfoWrapper>
          <Typograpy variant="subtitle-2">{user.username}</Typograpy>
          <Typograpy variant="body-2" textColor="gray44">
            {scheduleSentByPlayer}
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
