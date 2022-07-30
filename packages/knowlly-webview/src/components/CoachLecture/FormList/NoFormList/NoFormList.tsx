import Image from 'next/image';
import * as Styled from './NoFormListStyle';

const NoFormList = () => {
  return (
    <Styled.NoFormListContainer>
      <Image src="/img/no-form-list.png" alt="매칭 신청인이 없습니다" width={130} height={225} />
      <Styled.NoDataText variant="body-1" textColor="gray44">
        아직 매칭 신청인이 없습니다.
      </Styled.NoDataText>
    </Styled.NoFormListContainer>
  );
};

export default NoFormList;
