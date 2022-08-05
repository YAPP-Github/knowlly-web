import styled from 'styled-components';
import theme from '@styles/theme';
import Image from 'next/image';

export const AppContainer = styled.section`
  position: relative;
  height: 70rem;
  background-color: ${theme.color.primary.dark};
`;

export const ContentWrapper = styled.article`
  position: relative;
  width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

export const KnowllyIntroduce = styled.div`
  padding-left: 5rem;
`;

export const KnowllyIntroTitle = styled.h1`
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: ${theme.color.gray['FF']};
  line-height: 8rem;
  font-size: 6.8rem;
  font-family: 'GmarketSansMedium';
  white-space: pre-wrap;
`;

export const KnowllyEmphasis = styled.span`
  color: ${theme.color.gray['FF']};
  font-family: 'GmarketSansBold';
`;

export const KnowllyIntroDescription = styled.p`
  color: ${theme.color.gray['FF']};
  line-height: 4rem;
  font-size: 2.8rem;
  font-family: 'GmarketSansLight';
  white-space: pre-wrap;
  letter-spacing: -0.2px;
`;

export const KnowllyAppDownload = styled.div`
  display: flex;
  margin-top: 3rem;

  & > div {
    text-align: center;
  }
`;

export const DownloadTitle = styled.p`
  margin-bottom: 2.5rem;
  color: ${theme.color.gray['FF']};
  font-size: 18px;
  font-family: 'GmarketSansBold';
`;

export const VerticalLine = styled.div`
  display: inline-block;
  width: 1px;
  margin: 0 6rem;
  background-color: ${theme.color.gray['FF']};
  opacity: 0.2;
`;

export const QRDownload = styled(Image)`
  width: 14.2rem;
  height: 14.2rem;
`;

export const AppStoreDownloadWrapper = styled.div`
  padding-top: 3rem;
`;

export const AppStoreDownload = styled(Image)`
  width: 13.5rem;
  height: 4rem;
`;

export const KnowllyAppImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40rem;
  height: 60rem;
`;

export const KnowllyAppImage = styled(Image)`
  width: 100%;
`;
