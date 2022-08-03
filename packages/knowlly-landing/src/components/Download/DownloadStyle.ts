import styled from 'styled-components';
import theme from '@styles/theme';

export const DownloadContainer = styled.div`
  display: flex;
  height: 44.4rem;
  padding: 12.6rem 0 0 46.2rem;
`;

export const Title = styled.p`
  font-family: 'GmarketSansMedium';
  font-size: 5.4rem;
  line-height: 130%;
  color: ${theme.color.secondary['limeDark']};
`;

export const DownloadLinkContainer = styled.div`
  display: flex;
  margin-left: 17.5em;
`;

export const DownloadLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DownloadLinkText = styled.span`
  margin-bottom: 2.3rem;
  font-family: 'GmarketSansMedium';
  font-size: 1.8rem;
  line-height: 1.8rem;
  color: ${theme.color.gray['6B']};
`;

export const VerticalLine = styled.hr`
  height: 20.4rem;
  width: 0.1rem;
  margin: 0 6.6rem;
  border: 0.1rem solid ${theme.color.gray['DD']};
`;
