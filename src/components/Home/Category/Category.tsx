import { SvgIcon, Typograpy } from '@components/Common';
import CATEGORY_LIST from '@constants/categoryList';
import * as Styled from './CategoryStyle';

const Category = () => {
  const handleMoveToLectureCategoryPage = (category: string) => {
    window.Android?.navigateToCategory(category);
  };

  return (
    <Styled.CategoryList>
      {CATEGORY_LIST.map((category) => (
        <Styled.CategoryItem
          key={category.name}
          onClick={() => handleMoveToLectureCategoryPage(category.name)}
        >
          <SvgIcon type={category.icon} size={36} />
          <Typograpy variant="subtitle-4" textColor="gray6B">
            {category.title}
          </Typograpy>
        </Styled.CategoryItem>
      ))}
    </Styled.CategoryList>
  );
};

export default Category;
