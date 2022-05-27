import styled from 'styled-components';

export const InputStyle = styled.input`
  width: 31.2rem;
  height: 4.4rem;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid #cccccc;
  border-radius: 0.8rem;

  &:focus {
    border: 1px solid #779dff;
    outline-color: #779dff;
  }

  ::placeholder {
    color: #8f8f8f;
    font-size: 1.4rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 31.2rem;
`;

export const TextLength = styled.p`
  font-size: 1.2rem;
  color: #8f8f8f;
`;
