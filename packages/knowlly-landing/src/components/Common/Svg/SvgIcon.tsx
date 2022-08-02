import React from 'react';

export type SvgIconType = 'round-check' | 'checkbox-checked';

interface ISvgIconProps {
  type: SvgIconType;
  size: number;
}

const SvgIcon = ({ type, size }: ISvgIconProps) => {
  return (
    <svg width={size} height={size}>
      <use href={`#${type}`} />
    </svg>
  );
};

SvgIcon.defaultProps = {
  size: 34,
};

export default SvgIcon;
