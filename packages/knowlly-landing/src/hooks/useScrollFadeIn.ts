import { RefObject, useCallback, useEffect, useRef } from 'react';

interface IUseScrollFadeInProps {
  direction: string;
  duration: number;
  delay: number;
}

interface IUseScrollFadeIn {
  ref: RefObject<HTMLDivElement>;
  style: IInitialStyle;
}

interface IInitialStyle {
  opacity: number;
  transform?: string;
}

const useScrollFadeIn = ({
  direction,
  duration,
  delay,
}: IUseScrollFadeInProps): IUseScrollFadeIn => {
  const element = useRef<HTMLDivElement>(null);

  const handleFadeInDirection = (name: string) => {
    switch (name) {
      case 'none':
        return 'translate3d(0, 0, 0)';
      case 'up-20':
        return 'translate3d(0, 20%, 0)';
      case 'up-40':
        return 'translate3d(0, 40%, 0)';
      default:
        return;
    }
  };

  const handleFadeInScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const { current }: React.RefObject<HTMLDivElement> = element;

      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(handleFadeInScroll, { threshold: 0 });
      observer.observe(element.current as unknown as Element);
    }

    return () => observer && observer.disconnect();
  }, [handleFadeInScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleFadeInDirection(direction) },
  };
};

export default useScrollFadeIn;
