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
          <Styled.Copyrights>
            <a
              target="_blank"
              href="https://sunsetmood.notion.site/Knowlly-6293f0a979e64afbb220ebc5d0e1519f"
            >
              개인정보 처리방침
            </a>
          </Styled.Copyrights>
          <Styled.Copyrights>
            <a
              target="_blank"
              href="https://sunsetmood.notion.site/Knowlly-ad0dfa18936743729c240af88df170f0"
            >
              서비스 이용약관
            </a>
          </Styled.Copyrights>
        </Styled.ServiceTermsWrapper>
      </Styled.CopyrightsWrapper>
    </Styled.FooterContainer>
  );
};

export default Footer;
