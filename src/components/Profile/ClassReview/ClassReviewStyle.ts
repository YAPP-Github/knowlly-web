import styled from 'styled-components';
import Theme from '@styles/theme';

export const ClassReviewContainer = styled.div`
  margin-top: 4.8rem;
`;

export const NoReview = styled.div`
  display: flex;
  justify-content: center;
  width: 31.2rem;
  height: 12rem;
  margin-top: 0.8rem;
  padding: 5rem 1.2rem;
  border: 0.2rem dashed ${Theme.color.gray['EF']};
  border-radius: 1rem;
`;
