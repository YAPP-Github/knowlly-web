import { useCallback, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Modal, Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { MatchingPopup, PlayerInfo, PlayerUser, PlayerSchedule } from '@components/CoachLecture';
import useMatchingForm from '@hooks/coachLecture/useMatchingForm';

const CoachLectureFormDetailPage: NextPage = () => {
  const router = useRouter();
  const formId = router.query.id;

  const { matchingFormData, isFetching } = useMatchingForm(formId as string);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowModalClick = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, [isModalOpen]);

  return (
    <PageLayout isSpacing start={1}>
      {isFetching && <div>Fethcing...</div>}
      {!isFetching && (
        <>
          <Typograpy variant="headline-3">매칭 신청서</Typograpy>
          <PlayerInfo title="플레이어 정보">
            <PlayerUser userInfo={matchingFormData?.data.user} />
          </PlayerInfo>
          <PlayerInfo title="플레이어의 코멘트">
            <Typograpy variant="body-1" textColor="gray6B">
              {matchingFormData?.data.content}
            </Typograpy>
          </PlayerInfo>
          <PlayerInfo title="플레이어가 보낸 일정">
            <PlayerSchedule
              startAt={matchingFormData?.data.startAt}
              endAt={matchingFormData?.data.endAt}
            />
          </PlayerInfo>
          <MatchingPopup
            expirationDate={matchingFormData?.data.expirationDate}
            _onModalOpen={handleShowModalClick}
          />
          {isModalOpen && (
            <Modal buttonType="거절하기" _onClose={handleShowModalClick}>
              <Typograpy variant="subtitle-3">매칭 신청을 거절하시겠어요?</Typograpy>
            </Modal>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default CoachLectureFormDetailPage;
