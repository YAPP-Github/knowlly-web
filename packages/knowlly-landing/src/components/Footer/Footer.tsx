import React from 'react';
import * as Styled from './FooterStyle';

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Styled.IntroduceTextWrapper>
        <Styled.KnowllyText>KNOWLLY (널리)</Styled.KnowllyText>
        <Styled.Description>Get started new try our product</Styled.Description>
        <Styled.Description>Email: knowlly2022@gmail.com</Styled.Description>
      </Styled.IntroduceTextWrapper>
      <Styled.CopyrightsWrapper>
        <Styled.Copyrights>© 2022 knowlly. Copyright and rights reserved</Styled.Copyrights>
        <Styled.ServiceTermsWrapper>
          <Styled.Copyrights>개인정보 처리방침</Styled.Copyrights>
          <Styled.Copyrights>서비스 이용약관</Styled.Copyrights>
        </Styled.ServiceTermsWrapper>
      </Styled.CopyrightsWrapper>
    </Styled.FooterContainer>
  );
};

export default Footer;
