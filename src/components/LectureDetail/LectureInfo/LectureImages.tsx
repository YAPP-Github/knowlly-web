import { ILectureDetailImages } from '@/types/lectureDetail';
import React, { useRef, useState } from 'react';
import * as Styled from './LectureInfoStyles';

interface ILectureImagesProps {
  images: ILectureDetailImages[];
}

const LectureImages = ({ images }: ILectureImagesProps) => {
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
      {images.map((image) => (
        <Styled.LectureImage src={image.lectureImgUrl} key={image.id} />
      ))}
    </Styled.LectureImageWrapper>
  );
};

export default LectureImages;
