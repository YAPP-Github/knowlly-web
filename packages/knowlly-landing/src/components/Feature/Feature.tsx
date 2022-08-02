import React, { useState } from 'react';
import * as Styled from './FeatureStyle';

const Feature = () => {
  const MENU = [
    { id: 1, title: '수강클래스' },
    { id: 2, title: '운영클래스' },
    { id: 3, title: '후기' },
  ];
  const [selectedMenu, setselectedMenu] = useState(1);

  return (
    <Styled.FeatureContainer>
      <Styled.MenuContainer selectedMenu={selectedMenu}>
        {MENU.map((menu) => (
          <Styled.Menu key={menu.id}>{menu.title}</Styled.Menu>
        ))}
      </Styled.MenuContainer>
    </Styled.FeatureContainer>
  );
};

export default Feature;
