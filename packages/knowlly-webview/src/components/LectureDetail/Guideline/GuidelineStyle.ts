import { theme } from '@common/styles';
import styled from 'styled-components';

export const GuidelineContainer = styled.div`
  padding: 2.4rem;
  background-color: ${theme.color.gray['F7']};
  margin-bottom: 10rem;

  & > :first-child {
    margin-bottom: 2.4rem;
  }
`;

export const QAContainer = styled.div`
  margin-bottom: 2.4rem;
  white-space: pre-line;

  & > :first-child {
    margin-bottom: 0.8rem;
  }
`;
