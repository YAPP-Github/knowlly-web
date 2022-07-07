import { Typograpy } from '@components/Common';
import { PageLayout, Section } from '@components/Common/Layout';
import LoadingCard from '../LectureCard/LoadingCard';
import * as Styled from './LectureListStyle';

interface ILoadingListProps {
  isLoading?: boolean;
  isFetching?: boolean;
  title?: React.ReactNode;
}

const LoadingList = ({ isLoading, isFetching, title }: ILoadingListProps) => {
  return (
    <>
      {isLoading && (
        <PageLayout isSpacing start={1} end={4}>
          <Typograpy variant="headline-3">{title}</Typograpy>
          <Section start={2}>
            <Styled.LectureListContainer>
              {Array.from({ length: 10 }).map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </Styled.LectureListContainer>
          </Section>
        </PageLayout>
      )}
      {isFetching && (
        <Styled.LectureListContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </Styled.LectureListContainer>
      )}
    </>
  );
};

export default LoadingList;
