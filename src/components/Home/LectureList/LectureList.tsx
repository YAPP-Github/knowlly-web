import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { LectureCard } from '@components/Home';
import EmptyLectureList from '../EmptyLectureList/EmptyLectureList';
import { ILectureInfo, ILecturePages } from '@/types/lectureInfo';
import * as Styled from './LectureListStyle';

import api from '@api';
import { dehydrate, QueryClient } from 'react-query';
import queryKeys from '@react-query/keys';

interface ILectureList {
  lectureInfoList: ILectureInfo | ILecturePages;
}

const LectureList = ({ lectureInfoList }: ILectureList) => {
  const router = useRouter();

  const handleMoveToHomePage = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Styled.LectureListContainer>
      {lectureInfoList.data?.length > 0 ? (
        <>
          {lectureInfoList.data.map((lecture, index) => (
            <LectureCard key={index} lectureData={lecture} />
          ))}
        </>
      ) : (
        <EmptyLectureList _onClickBackButton={handleMoveToHomePage} />
      )}
    </Styled.LectureListContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.lectureInfo, () => api.fetchLectureInfo());

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default LectureList;
