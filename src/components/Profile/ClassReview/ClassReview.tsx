import { Typograpy } from '@components/Common';
import * as Styled from './ClassReviewStyle';

const ClassReview = () => {
  return (
    <Styled.ClassReviewContainer>
      <Typograpy variant="subtitle-1">플레이어 후기</Typograpy>
      <Styled.NoReview>
        <Typograpy variant="body-1" textColor="gray8F">
          플레이어 후기가 아직 없어요.
        </Typograpy>
      </Styled.NoReview>
    </Styled.ClassReviewContainer>
  );
};

export default ClassReview;
