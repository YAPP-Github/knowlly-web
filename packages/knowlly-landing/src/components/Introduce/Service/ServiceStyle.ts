import styled, { keyframes } from 'styled-components';
import theme from '@styles/theme';
import Image from 'next/image';

const underlineAnimation = keyframes`
0% {
	opacity: 0;
	width: 0;
}

100% {
	opacity: 1;
	width: 39.5rem;
}
`;

export const ServiceContainer = styled.section`
  position: relative;
  width: 75rem;
  margin: 0 auto;
  padding-top: 13.4rem;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BallWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -20rem;
  width: 36.5rem;
  height: 40rem;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    top: 0;
    right: -35rem;
  }
`;

export const BallBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;

  background: radial-gradient(
    50% 50% at 50% 50%,
    ${theme.color.primary.basic} 0%,
    rgba(240, 195, 154, 0) 100%
  );
`;

export const BallBlur = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 25rem;
  background: ${theme.color.primary.dark};
  filter: blur(100rem);
`;

export const ServiceTitleWrapper = styled.div`
  position: relative;
`;

export const ServiceTitle = styled.h1`
  margin-bottom: 3.4rem;
  line-height: 6.24rem;
  font-family: 'GmarketSansBold';
  font-size: 4.8rem;
  text-align: center;
  white-space: pre-wrap;
`;

export const ServiceTitleUnderline = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 23.5rem;
  left: 0;
  z-index: -1;
  width: 39.5rem;
  height: 2.5rem;
  background: ${theme.color.primary.basic};
  animation: ${underlineAnimation} 1s 1.3s ease-in-out both;
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};

  @media only screen and (max-width: 1200px) {
    position: relative;
    top: 12.6rem;
    left: -18rem;
  }
`;

export const ServiceDescription = styled.p`
  line-height: 3.64rem;
  font-family: 'GmarketSansMedium';
  font-size: 2.8rem;
  text-align: center;
  white-space: pre-wrap;
`;

export const ServiceContentImageWrapper = styled.div`
  width: 79.5rem;
  height: 70.5rem;
`;

export const ServiceContentImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
