import styled, { keyframes } from 'styled-components';
import theme from '@styles/theme';
import Image from 'next/image';

const descriptionFadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(40%);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const downloadFadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(20%);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const fadeInAfterRender = keyframes`
0% {
    opacity: 0;
    transform: translateY(5%);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const responsiveFadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(10%);
}

100% {
    opacity: 1;
    transform: translateY(0);
}
`;

export const AppContainer = styled.section`
  position: relative;
  height: 70rem;
  background-color: ${theme.color.primary.dark};

  @media only screen and (max-width: 1200px) {
    height: 100%;
  }
`;

export const ContentWrapper = styled.article`
  position: relative;
  width: 120rem;
  height: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75rem;
    margin: 0 auto;
  }
`;

export const KnowllyIntroduce = styled.div`
  padding-left: 5rem;

  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
`;

export const KnowllyIntroTitle = styled.h1`
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: ${theme.color.gray['FF']};
  line-height: 8rem;
  font-size: 6.8rem;
  font-family: 'GmarketSansMedium';
  white-space: pre-wrap;

  @media only screen and (max-width: 1200px) {
    text-align: center;
  }
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
  animation: ${descriptionFadeIn} 0.7s 0.7s ease-out both;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const KnowllyAppDownload = styled.div`
  display: flex;
  margin-top: 3rem;
  animation: ${downloadFadeIn} 0.9s 0.9s ease both;

  & > div {
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
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

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const KnowllyAppImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40rem;
  height: 60rem;
  animation: ${fadeInAfterRender} 0.5s 0.2s ease-in-out both;

  @media only screen and (max-width: 1200px) {
    position: relative;
    animation: ${responsiveFadeIn} 0.5s 0.2s ease-in-out both;
  }
`;

export const KnowllyAppImage = styled(Image)`
  width: 100%;
`;
