import theme from '@styles/theme';
import styled from 'styled-components';

export const GuideContainer = styled.section`
  height: 66.4rem;
  padding: 11.2rem 0 0 37rem;
  background-color: ${theme.color.primary['light']};
`;

export const Title = styled.p`
  font-family: 'GmarketSansBold';
  font-size: 5rem;
  color: ${theme.color.primary['dark']};
  line-height: 130%;
`;

export const ContentContainer = styled.div`
  margin-top: 5.3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:1.8rem;
  & > :first-child {
    margin-right:2.1rem;
  }
}
`;

export const Content = styled.span`
  font-family: 'GmarketSansMedium';
  font-size: 2rem;
  color ${theme.color.gray['00']};
  line-height: 3rem;
`;

export const GuideImage = styled.img`
  position: absolute;
  left: 96rem;
  top: 12.8rem;
`;
