import { useRef } from 'react';
import useInViewport from '@hooks/useInViewport';
import useScrollFadeIn from '@hooks/useScrollFadeIn';
import * as Styled from './ServiceStyle';

const Service = () => {
  const scrollFadeIn = {
    title: useScrollFadeIn({ direction: 'up-20', duration: 1, delay: 0.2 }),
    underline: useScrollFadeIn({ direction: 'none', duration: 1, delay: 1 }),
    description: useScrollFadeIn({ direction: 'up-20', duration: 1, delay: 0.5 }),
    content: useScrollFadeIn({ direction: 'up-20', duration: 1, delay: 0.5 }),
  };

  const underlineRef = useRef<HTMLDivElement>(null);
  const isInViewport = useInViewport(underlineRef);

  return (
    <Styled.ServiceContainer>
      <Styled.BallWrapper>
        <Styled.BallBackground />
        <Styled.BallBlur />
      </Styled.BallWrapper>
      <Styled.ServiceTitleUnderline isVisible={isInViewport} ref={underlineRef} />
      <Styled.ServiceTitleWrapper {...scrollFadeIn.title}>
        <Styled.ServiceTitle>
          {'핫한 IT 업계의 1:1 클래스로\n커리어 업그레이드에 도전해보세요!'}
        </Styled.ServiceTitle>
        <Styled.ServiceDescription {...scrollFadeIn.description}>
          {'Knowlly에서는 결제 없이\n서로 클래스를 열고 수강하며 성장할 수 있어요!'}
        </Styled.ServiceDescription>
      </Styled.ServiceTitleWrapper>
      <Styled.ServiceContentImageWrapper {...scrollFadeIn.content}>
        <Styled.ServiceContentImage
          src="/img/service-content.png"
          alt="knowlly marketing content image"
          width={795}
          height={705}
        />
      </Styled.ServiceContentImageWrapper>
    </Styled.ServiceContainer>
  );
};

export default Service;
