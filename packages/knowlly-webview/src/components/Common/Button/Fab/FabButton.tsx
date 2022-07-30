import * as Styled from './FabButtonStyle';

interface IFabButtonProps {
  _onClick?: () => void;
}

const FabButton = ({ _onClick }: IFabButtonProps) => {
  // + -> 아이콘으로 대체할 예정
  return <Styled.FabButtonStyle onClick={_onClick}>+</Styled.FabButtonStyle>;
};

export default FabButton;
