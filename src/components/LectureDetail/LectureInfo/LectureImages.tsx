import React, { useRef, useState } from 'react';
import * as Styled from './LectureInfoStyles';

const LectureImages = () => {
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
    <Styled.LectureImageWrapper
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      <Styled.LectureImage />
      <Styled.LectureImage />
      <Styled.LectureImage />
    </Styled.LectureImageWrapper>
  );
};

export default LectureImages;
