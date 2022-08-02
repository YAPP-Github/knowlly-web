import React from 'react';
import * as Styled from './FeatureStyle';

const Feature = () => {
  const MENU = ['수강클래스', '운영클래스', '후기'];
  return (
    <Styled.FeatureContainer>
      <Styled.MenuContainer>
        {MENU.map((menu) => (
          <div>
            <p>{menu}</p>
          </div>
        ))}
      </Styled.MenuContainer>
    </Styled.FeatureContainer>
  );
};

export default Feature;
