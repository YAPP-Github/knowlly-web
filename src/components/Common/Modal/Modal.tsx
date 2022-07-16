import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import * as Styled from './ModalStyle';

interface IModalProps {
  buttonText?: string;
  _onClose: () => void;
  _onOk?: () => void;
}

const Modal = ({ children, buttonText, _onClose, _onOk }: PropsWithChildren<IModalProps>) => {
  const handleConfirmClick = () => {
    _onOk && _onOk();

    _onClose();
  };

  return createPortal(
    <>
      <Styled.Dimmed onClick={_onClose} />
      <Styled.ModalContainer>
        <Styled.ModalTextWrapper>{children}</Styled.ModalTextWrapper>
        {buttonText ? (
          <Styled.ModalButtonWrapper>
            <Button variant="outlined" size="x-small" _onClick={_onClose}>
              취소
            </Button>
            <Button size="x-small" _onClick={_onOk}>
              {buttonText}
            </Button>
          </Styled.ModalButtonWrapper>
        ) : (
          <Styled.ModalConfirmButton size="middle" _onClick={handleConfirmClick}>
            확인
          </Styled.ModalConfirmButton>
        )}
      </Styled.ModalContainer>
    </>,
    document.body
  );
};

export default Modal;
