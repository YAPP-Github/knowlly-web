import styled from 'styled-components';

export const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1.2rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
  & > * {
    margin-bottom: 0.7rem;
  }
`;

export const ProfileLink = styled.div`
  display: flex;
  align-items: flex-end;
  &>: first-child {
    margin-right: 0.4rem;
  }
`;
