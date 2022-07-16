import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import * as Styled from './ModalStyle';

interface IModalProps {
  buttonType?: string;
  _onClose: () => void;
  _onConfirm?: () => void;
}

const Modal = ({ children, buttonType, _onClose, _onConfirm }: PropsWithChildren<IModalProps>) => {
  const handleConfirmClick = () => {
    _onConfirm && _onConfirm();

    _onClose();
  };

  const customButton = [
    <Styled.ModalButtonWrapper>
      <Button variant="outlined" size="x-small" _onClick={_onClose}>
        취소
      </Button>
      <Button size="x-small" _onClick={_onConfirm}>
        {buttonType}
      </Button>
    </Styled.ModalButtonWrapper>,
  ];

  const confirmButton = [
    <Styled.ModalConfirmButton size="middle" _onClick={handleConfirmClick}>
      확인
    </Styled.ModalConfirmButton>,
  ];

  return createPortal(
    <>
      <Styled.Dimmed onClick={_onClose} />
      <Styled.ModalContainer>
        <Styled.ModalTextWrapper>{children}</Styled.ModalTextWrapper>
        {buttonType === 'confirm' ? confirmButton : customButton}
      </Styled.ModalContainer>
    </>,
    document.body
  );
};

export default Modal;
