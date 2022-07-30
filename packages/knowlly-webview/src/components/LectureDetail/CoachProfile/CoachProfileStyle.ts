import styled from 'styled-components';
import theme from '@styles/theme';
import { Image } from '@components/Common';

export const CoachProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const CoachProfileImg = styled(Image)`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const CoachProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 12rem);
  margin: 0 0 1.8rem 2rem;
  color: ${theme.color.gray['44']};
  & > :first-child {
    margin-bottom: 0.4rem;
  }
`;

export const Line = styled.hr`
  border: 0.1rem solid ${theme.color.gray['EF']};
`;
