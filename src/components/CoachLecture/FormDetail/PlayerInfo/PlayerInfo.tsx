import { PropsWithChildren } from 'react';
import * as Styled from './PlayerInfoStyle';

interface IPlayerInfoProps {
  title: string;
}

const PlayerInfo = ({ children, title }: PropsWithChildren<IPlayerInfoProps>) => {
  return (
    <Styled.PlayerInfoContainer>
      <Styled.PlayerInfoTitle variant="subtitle-2" textColor="gray44">
        {title}
      </Styled.PlayerInfoTitle>
      {children}
    </Styled.PlayerInfoContainer>
  );
};

export default PlayerInfo;
