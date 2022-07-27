import { SvgIconType } from '@components/Common/Svg/SvgIcon';

interface ICategoryList {
  name: string;
  icon: SvgIconType;
  title: string;
}

const CATEGORY_LIST: ICategoryList[] = [
  {
    name: 'PM',
    icon: 'category-service-planning',
    title: '기획 / PM',
  },
  {
    name: 'DESIGN',
    icon: 'category-design',
    title: '디자인',
  },
  {
    name: 'DEVELOP',
    icon: 'category-develop',
    title: '개발',
  },
  {
    name: 'MARKETING',
    icon: 'category-marketing',
    title: '마케팅',
  },
  {
    name: 'LANGUAGE',
    icon: 'category-language',
    title: '외국어',
  },
  {
    name: 'ETC',
    icon: 'category-etc',
    title: '기타',
  },
];

export default CATEGORY_LIST;
