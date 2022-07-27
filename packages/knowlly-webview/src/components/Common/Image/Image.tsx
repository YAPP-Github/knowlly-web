import { default as NextImage, ImageLoader } from 'next/image';
import { PropsWithChildren } from 'react';

interface IImageProps {
  type:
    | 'lecture-list'
    | 'lecture-detail'
    | 'profile'
    | 'form-profile'
    | 'coach-profile'
    | 'review-profile';
  src: string;
  alt?: string;
  priority?: boolean;
}

// loader의 경우 이미지가 어떻게 오는지에 따라 변동 가능
const loader: ImageLoader = ({ src, width, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}`;
};

const handleImgWidth = (type: string) => {
  switch (type) {
    case 'lecture-list':
      return 88;
    case 'lecture-detail':
      return 150;
    case 'profile':
      return 60;
    case 'form-profile':
      return 32;
    case 'coach-profile':
      return 48;
    case 'review-profile':
      return 40;
  }
};

const Image = (props: PropsWithChildren<IImageProps>) => {
  const { type, src, alt, ...rest } = props;
  return (
    <NextImage
      {...rest}
      src={src}
      alt={alt}
      width={handleImgWidth(type)}
      height={handleImgWidth(type)}
      loader={loader}
      layout="intrinsic"
    />
  );
};

export default Image;
