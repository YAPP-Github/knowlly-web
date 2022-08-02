import { useCallback, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Modal, Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { MatchingPopup, PlayerUser, PlayerSchedule } from '@components/CoachLecture';
import useMatchingForm from '@hooks/coachLecture/useMatchingForm';
import usePatchFormState from '@hooks/coachLecture/usePatchFormState';

const CoachLectureFormDetailPage: NextPage = () => {
  const router = useRouter();
  const formId = router.query.id;

  const { matchingFormData, isFetching } = useMatchingForm(formId as string);
  const patchFormState = usePatchFormState(formId as string);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, [isModalOpen]);

  const handleRejectConfirmButtonClick = useCallback(() => {
    patchFormState({ state: 'REJECT' });

    setIsModalOpen(false);
  }, [isModalOpen]);

  const handleMatchingAcceptButtonClick = useCallback(() => {
    patchFormState({ state: 'ACCEPT' });
  }, []);

  return (
    <PageLayout isSpacing start={1}>
      <Typograpy variant="headline-3">매칭 신청서</Typograpy>
      <PlayerUser.Info userInfo={matchingFormData?.user} isFetching={isFetching} />
      <PlayerUser.Comment comment={matchingFormData?.content} isFetching={isFetching} />
      <PlayerSchedule
        formId={matchingFormData?.id}
        startAt={matchingFormData?.startAt}
        endAt={matchingFormData?.endAt}
        isFetching={isFetching}
      />
      <MatchingPopup
        expirationDate={matchingFormData?.expirationDate}
        _onModalOpen={handleModalOpen}
        _onAccept={handleMatchingAcceptButtonClick}
      />
      {isModalOpen && (
        <Modal
          buttonType="거절하기"
          _onClose={handleModalOpen}
          _onConfirm={handleRejectConfirmButtonClick}
        >
          <Typograpy variant="subtitle-3">매칭 신청을 거절하시겠어요?</Typograpy>
        </Modal>
      )}
    </PageLayout>
  );
};

export default CoachLectureFormDetailPage;
