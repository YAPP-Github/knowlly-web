import styled from 'styled-components';
import theme from '@styles/theme';

export const FooterContainer = styled.div`
  height: 368px;
  background-color: ${theme.color.gray['EF']};
`;

export const IntroduceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34.8rem;
  padding-top: 9.9rem;
  & > * {
    margin-bottom: 1.6rem;
  }
`;

export const KnowllyText = styled.span`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  color: ${theme.color.primary['basic']};
`;

export const Description = styled.span`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${theme.color.gray['44']};
`;

export const CopyrightsWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 30rem;

  & > :first-child {
    margin-right: 11.4rem;
  }
`;

export const Copyrights = styled.p`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${theme.color.gray['6B']};
`;

export const ServiceTermsWrapper = styled.div`
  & > :first-child {
    margin-bottom: 1rem;
  }
`;
