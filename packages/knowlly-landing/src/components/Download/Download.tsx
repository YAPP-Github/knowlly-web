import React from 'react';
import * as Styled from './DownloadStyle';

const Download = () => {
  return (
    <Styled.DownloadContainer>
      <div>
        <Styled.Title>지금 바로 널리를</Styled.Title>
        <Styled.Title>다운로드 하세요.</Styled.Title>
      </div>
      <Styled.DownloadLinkContainer>
        <Styled.DownloadLinkWrapper>
          <Styled.DownloadLinkText>QR코드 다운로드</Styled.DownloadLinkText>
          <img src={'qr'} alt="널리 다운로드 QR 코드" />
        </Styled.DownloadLinkWrapper>
        <Styled.VerticalLine />
        <Styled.DownloadLinkWrapper>
          <Styled.DownloadLinkText>앱스토어 다운로드</Styled.DownloadLinkText>
          <img src={'/img/app-store.png'} alt="널리 구글 플레이 다운로드" />
        </Styled.DownloadLinkWrapper>
      </Styled.DownloadLinkContainer>
    </Styled.DownloadContainer>
  );
};

export default Download;
