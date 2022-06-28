import Link from 'next/link';
import { SvgIcon, Typograpy } from '@components/Common';
import { SvgIconType } from '@components/Common/Svg/SvgIcon';
import * as Styled from './CategoryStyle';

interface ICategoryMenu {
  id: number;
  icon: SvgIconType;
  name: string;
}

const Category = () => {
  const categoryMenu: ICategoryMenu[] = [
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

  return (
    <Styled.CategoryList>
      {categoryMenu.map((category) => (
        <Styled.CategoryItem key={category.id}>
          <Link
            href={{
              pathname: '/category',
              query: { id: category.id },
            }}
          >
            <a>
              <SvgIcon type={category.icon} size={36} />
              <Typograpy variant="subtitle-4" textColor="gray6B">
                {category.name}
              </Typograpy>
            </a>
          </Link>
        </Styled.CategoryItem>
      ))}
    </Styled.CategoryList>
  );
};

export default Category;
