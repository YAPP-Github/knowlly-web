import { SvgIcon } from '@components/Common';
import useScrollFadeIn from '@hooks/useScrollFadeIn';
import * as Styled from './AppStyle';

const App = () => {
  const scrollFadeIn = {
    logo: useScrollFadeIn({ direction: 'none', duration: 1, delay: 0.1 }),
    appImage: useScrollFadeIn({ direction: 'up-05', duration: 1, delay: 0.1 }),
    title: useScrollFadeIn({ direction: 'up-20', duration: 1, delay: 0.5 }),
    description: useScrollFadeIn({ direction: 'up-40', duration: 1, delay: 0.7 }),
    download: useScrollFadeIn({ direction: 'none', duration: 1, delay: 0.9 }),
  };

  return (
    <Styled.AppContainer>
      <Styled.ContentWrapper>
        <Styled.KnowllyIntroduce>
          {/* 로고 */}
          <div {...scrollFadeIn.logo}>
            <SvgIcon type="logo" size={120} />
          </div>

          {/* 텍스트 */}
          <Styled.KnowllyIntroTitle {...scrollFadeIn.title}>
            {'성장하기 위한\n지식교환 플랫폼,'}
            <Styled.KnowllyEmphasis>{' 널리'}</Styled.KnowllyEmphasis>
          </Styled.KnowllyIntroTitle>
          <Styled.KnowllyIntroDescription {...scrollFadeIn.description}>
            {'당신을 위한 지식 교환, 별도의 결제 없이\n가능합니다.'}
          </Styled.KnowllyIntroDescription>

          {/* 다운로드 */}
          <Styled.KnowllyAppDownload {...scrollFadeIn.download}>
            <div>
              <Styled.DownloadTitle>QR코드 다운로드</Styled.DownloadTitle>
              <Styled.QRDownload src="/img/app-qrcode.png" width={120} height={120} />
            </div>
            <Styled.VerticalLine />
            <div>
              <Styled.DownloadTitle>앱스토어 다운로드</Styled.DownloadTitle>
              <Styled.AppStoreDownloadWrapper>
                <Styled.AppStoreDownload src="/img/app-store.png" width={135} height={40} />
              </Styled.AppStoreDownloadWrapper>
            </div>
          </Styled.KnowllyAppDownload>
        </Styled.KnowllyIntroduce>

        {/* 앱 이미지 */}
        <Styled.KnowllyAppImageWrapper {...scrollFadeIn.appImage}>
          <Styled.KnowllyAppImage src={'/img/knowlly-app.png'} width={400} height={600} />
        </Styled.KnowllyAppImageWrapper>
      </Styled.ContentWrapper>
    </Styled.AppContainer>
  );
};

export default App;
