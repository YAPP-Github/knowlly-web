import styled from 'styled-components';
import theme from '@styles/theme';

export const CoachProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CoachProfileImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

export const CoachProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  color: ${theme.color.gray['44']};
`;

export const CoachNickname = styled.p`
  margin-bottom: 0.4rem;
`;

export const CoachIntro = styled.div``;
