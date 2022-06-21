import React, { useRef, useState } from 'react';
import * as Styled from './ClassInfoStyle';

const ClassImages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(false);
  const [X, setX] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
    if (scrollRef.current) setX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setDrag(false);
  };

  const onDragMove = (e: React.DragEvent<HTMLDivElement>) => {
    if (drag && scrollRef.current) {
      scrollRef.current.scrollLeft = X - e.pageX;
    }
  };

  return (
    <Styled.PictureWrapper
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      <Styled.ClassImg />
      <Styled.ClassImg />
      <Styled.ClassImg />
    </Styled.PictureWrapper>
  );
};

export default ClassImages;
