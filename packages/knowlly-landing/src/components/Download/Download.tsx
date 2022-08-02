import React from 'react';
import * as Styled from './DownloadStyle';

const Download = () => {
  return (
    <Styled.DownloadContainer>
      <span>지금 바로 널리를 다운로드 하세요.</span>
      <div>
        <span>QR코드 다운로드</span>
        <img src={'qr'} alt="널리 다운로드 QR 코드" />
      </div>
      <hr />
      <div>
        <span>앱스토어 다운로드</span>
        <img src={'/img/google-play.png'} alt="널리 구글 플레이 다운로드" />
      </div>
    </Styled.DownloadContainer>
  );
};

export default Download;
