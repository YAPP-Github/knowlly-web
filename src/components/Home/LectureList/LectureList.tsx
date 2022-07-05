import { GetStaticProps } from 'next';
import { LectureCard } from '@components/Home';
import { ILectureInfo, ILecturePages } from '@/types/lectureInfo';
import * as Styled from './LectureListStyle';

import api from '@api';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';

interface ILectureList {
  lectureInfoList: ILectureInfo | ILecturePages;
}

const LectureList = ({ lectureInfoList }: ILectureList) => {
  return (
    <Styled.LectureListContainer>
      {lectureInfoList.data?.map((lecture, index) => (
        <LectureCard key={index} lectureData={lecture} />
      ))}
    </Styled.LectureListContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.lectureInfo, () => api.fetchLectureInfo());

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default LectureList;
