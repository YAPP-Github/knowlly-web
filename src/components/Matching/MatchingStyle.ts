import { Button } from '@components/Common';
import styled from 'styled-components';

export const MatchingButton = styled(Button)`
  position: fixed;
  bottom: 2.4rem;
  margin: 0 1.6rem;
`;

export const IndicatorWrapper = styled.div`
  margin: 1.2rem 0 2.4rem;
  & > :first-child {
    margin-right: 0.8rem;
  }
`;
