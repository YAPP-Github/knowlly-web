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

export const ReviewWrapper = styled.div`
  margin-top: 2.6rem;
`;

export const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

export const Profile = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;

  & > * {
    margin-bottom: 0.7rem;
  }
`;

export const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.2rem;

  & > :first-child {
    margin-right: 0.6rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > :first-child {
    margin-bottom: 0.6rem;
  }
`;

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8.8rem;
  pointer: cursor;
`;
