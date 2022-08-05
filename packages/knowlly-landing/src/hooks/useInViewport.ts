import { RefObject, useCallback, useEffect, useState } from 'react';

const useInViewport = (targetRef: RefObject<HTMLDivElement>) => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const handleViewportScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && targetRef.current) {
        setIsInViewport(true);
      }
    },
    [targetRef]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (targetRef.current) {
      observer = new IntersectionObserver(handleViewportScroll, { threshold: 0.7 });
      observer.observe(targetRef.current);
    }

    return () => observer && observer.disconnect();
  }, [handleViewportScroll]);

  return isInViewport;
};

export default useInViewport;
