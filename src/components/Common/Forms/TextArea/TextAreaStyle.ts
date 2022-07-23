import styled from 'styled-components';
import theme from '@styles/theme';

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 18.4rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid ${theme.color.gray['DD']};
  border-radius: 0.8rem;
  font-family: 'SUIT-Regular';

  &:focus {
    border: 0.1rem solid ${theme.color.system['blue']};
    outline-color: ${theme.color.system['blue']};
  }

  ::placeholder {
    color: ${theme.color.gray['CC']};
    font-size: 1.2rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextLength = styled.p`
  font-size: 1.2rem;
  color: ${theme.color.gray['8F']};
`;
