import React from 'react';

interface ISvgIconProps {
  type:
    | 'checkbox-checked'
    | 'checkbox-default'
    | 'clear'
    | 'k_class'
    | 'review'
    | 'previous'
    | 'indicator-1-active'
    | 'indicator-1-inactive'
    | 'indicator-2-active'
    | 'indicator-2-inactive'
    | 'list-checkbox-checked'
    | 'list-checkbox-default'
    | 'search'
    | 'chevron-down-fill'
    | 'chevron-down'
    | 'chevron-up'
    | 'chevron-right'
    | 'category-service-planning'
    | 'category-design'
    | 'category-develop'
    | 'category-marketing'
    | 'category-language'
    | 'category-etc'
    | 'link';
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
  size: 24,
};

export default SvgIcon;
