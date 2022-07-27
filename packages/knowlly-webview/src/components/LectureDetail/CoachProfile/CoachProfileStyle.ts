import styled from 'styled-components';
import { theme } from '@common/styles';

export const CoachProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const CoachProfileImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const CoachProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1.8rem 2rem;
  color: ${theme.color.gray['44']};

  & > :first-child {
    margin-bottom: 0.4rem;
  }
`;

export const Line = styled.hr`
  border: 0.1rem solid ${theme.color.gray['EF']};
`;
