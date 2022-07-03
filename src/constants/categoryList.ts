import { SvgIconType } from '@components/Common/Svg/SvgIcon';

interface ICategoryList {
  id: number;
  icon: SvgIconType;
  name: string;
}

const CATEGORY_LIST: ICategoryList[] = [
  {
    id: 1,
    icon: 'category-service-planning',
    name: '기획 / PM',
  },
  {
    id: 2,
    icon: 'category-design',
    name: '디자인',
  },
  {
    id: 3,
    icon: 'category-develop',
    name: '개발',
  },
  {
    id: 4,
    icon: 'category-marketing',
    name: '마케팅',
  },
  {
    id: 5,
    icon: 'category-language',
    name: '외국어',
  },
  {
    id: 6,
    icon: 'category-etc',
    name: '기타',
  },
];

export default CATEGORY_LIST;
