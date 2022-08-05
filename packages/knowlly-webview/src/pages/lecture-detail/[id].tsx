import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LectureInfo, CoachProfile, Guideline, HowToUse } from '@components/LectureDetail';
import { Typograpy } from '@components/Common';
import { PageLayout } from '@components/Common/Layout';
import * as Styled from '@components/LectureDetail/LectureDetailStyle';
import useLectureDetail from '@hooks/lecture/useLectureDetail';
import useAuth from '@hooks/auth/useAuth';
import MatchingButton from '@components/LectureDetail/MatchingButton/MatchingButton';

const LectureDetail: NextPage = () => {
  const router = useRouter();
  const lectureId = Number(router.query.id);
  const { lectureDetail, isFetching } = useLectureDetail(lectureId);
  const user = useAuth();

  const category = lectureDetail?.data.category;
  const topic = lectureDetail?.data.topic;
  const coachProfile = lectureDetail?.data.coach;
  const lectureInfo = lectureDetail?.data;

  const formatCategoryName = (category: string) => {
    switch (category) {
      case 'PM':
        return '기획';
      case 'DESIGN':
        return '디자인';
      case 'DEVELOP':
        return '개발';
      case 'MARKETING':
        return '마케팅';
      case 'LANGUAGE':
        return '외국어';
      case 'ETC':
        return '기타';
    }
  };

  return (
    <>
      {!isFetching && lectureDetail && user && (
        <>
          <PageLayout isSpacing>
            <Styled.CategoryBadge type="category">
              {formatCategoryName(category)}
            </Styled.CategoryBadge>
            <Typograpy variant="headline-3">{topic}</Typograpy>
            <CoachProfile coachProfile={coachProfile} />
          </PageLayout>
          <LectureInfo lectureInfo={lectureInfo} />
          <PageLayout isSpacing>
            <HowToUse />
          </PageLayout>
          <Guideline />
          <MatchingButton user={user} />
        </>
      )}
    </>
  );
};

export default LectureDetail;
