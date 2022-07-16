import { Button, Typograpy } from '@components/Common';
import { formatDate } from '@utils';
import * as Styled from './MatchingPopupStyle';

interface IMatchingPopupProps {
  expirationDate: string;
  _onModalOpen: () => void;
}

const MatchingPopup = ({ expirationDate, _onModalOpen }: IMatchingPopupProps) => {
  return (
    <Styled.MatchingPopupContainer>
      <Styled.MatchingExpirationDate>
        <Typograpy variant="subtitle-2">{formatDate(expirationDate, 'year')}</Typograpy>
        <Typograpy variant="body-1">까지 응답 가능</Typograpy>
      </Styled.MatchingExpirationDate>
      <Styled.MatchingAlertMessage>
        <Typograpy variant="body-2" textColor="gray6B">
          기간 내 매칭을 수락하지 않으면 자동으로 거절돼요.
        </Typograpy>
      </Styled.MatchingAlertMessage>
      <Styled.MatchingButtonWrapper>
        <Button variant="outlined" size="small" type="button" _onClick={_onModalOpen}>
          매칭 거절하기
        </Button>
        <Button variant="contained" size="small" type="button">
          매칭 수락하기
        </Button>
      </Styled.MatchingButtonWrapper>
    </Styled.MatchingPopupContainer>
  );
};

export default MatchingPopup;
