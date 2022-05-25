import styled from 'styled-components';

export const InputStyle = styled.textarea<{ type: string }>`
  width: 31.2rem;
  height: ${(props) => (props.type === 'single' ? `4.4rem` : `18.4rem`)};
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid #cccccc;
  border-radius: 0.8rem;

  &:focus {
    border: 0.1rem solid #779dff;
  }

  ::placeholder {
    font-size: 1.4rem;
    color: #8f8f8f;
    vertical-align: top;
  }
`;
