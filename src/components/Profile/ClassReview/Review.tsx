import { TextMoreButton, Typograpy } from '@components/Common';
import * as Styled from './ClassReviewStyle';

const Review = () => {
  const handleTextMore = () => {
    console.log();
  };
  return (
    <Styled.ReviewWrapper>
      <Styled.Profile>
        <Styled.ProfileImg src={`/img/profile.png`} />
        <div>
          <Styled.NameDate>
            <Typograpy variant="subtitle-4">민희진</Typograpy>
            <Typograpy variant="body-2" textColor="gray8F">
              2022년 5월 8일
            </Typograpy>
          </Styled.NameDate>
          <Typograpy variant="body-2" textColor="gray44">
            프랑스어
          </Typograpy>
        </div>
      </Styled.Profile>
      <Styled.Contents>
        <Typograpy variant="body-2" textColor="gray6B">
          모바일에서는 최대 3줄까지 노출이 됩니다. 더 많아질 경우 더보기를 붙입니다. 모바일에서는
          최대 3줄까지 노출이 됩니다. 더 많아질 경우 더보기를 붙입니다 이렇게붙여주세요 더보기를
          붙입니다 이렇게 붙...
        </Typograpy>
        <TextMoreButton _onClick={handleTextMore} />
      </Styled.Contents>
    </Styled.ReviewWrapper>
  );
};

export default Review;
