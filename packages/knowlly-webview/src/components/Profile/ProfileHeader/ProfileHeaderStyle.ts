import { Image, Typograpy } from '@components/Common';
import styled from 'styled-components';

export const ProfileImg = styled(Image)`
  border-radius: 50%;
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

export const PlayerType = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 0.4rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  &>: first-child {
    margin-right: 0.4rem;
  }
`;

export const Portfolio = styled(Typograpy)`
  width: calc(100vw - 15rem);
`;
