import { Button, TextArea } from '@components/Common';
import styled from 'styled-components';

export const ReviewTextArea = styled(TextArea)`
  margin: 2.4rem 0 1.2rem 0;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;

  &>: first-child {
    margin-right: 0.8rem;
  }
`;

export const ReviewButton = styled(Button)`
  position: absolute;
  bottom: 2.4rem;
  margin: 0 1.6rem;
`;
