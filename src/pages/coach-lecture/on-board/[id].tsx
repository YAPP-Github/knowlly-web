import { useRouter } from 'next/router';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import { UserFormList } from '@components/CoachLecture';
import useLectureForms from '@hooks/coachLecture/useLectureForms';
import * as Styled from '@components/CoachLecture/CoachLectureStyle';

const CoachLectureOnBoardPage = () => {
  const router = useRouter();
  const lectureInfoId = router.query.id;

  const { lectureForms, isFetching } = useLectureForms(lectureInfoId as string);

  return (
    <PageLayout isSpacing start={1} end={2}>
      <Typograpy variant="headline-4">매칭신청인</Typograpy>
      <Styled.OnBoardPageDescription variant="body-1" textColor="gray8F">
        가장 먼저 신청한 플레이어부터 차례로 노출됩니다.
      </Styled.OnBoardPageDescription>
      {isFetching ? <div>fetching...</div> : <UserFormList lectureForms={lectureForms} />}
    </PageLayout>
  );
};

export default CoachLectureOnBoardPage;
