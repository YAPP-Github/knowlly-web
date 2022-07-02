import Link from 'next/link';
import { SvgIcon, Typograpy } from '@components/Common';
import CATEGORY_LIST from './CategoryList';
import * as Styled from './CategoryStyle';

const Category = () => {
  return (
    <Styled.CategoryList>
      {CATEGORY_LIST.map((category) => (
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
