import React from 'react';
import {
  Backdrop,
  DialogActionButton,
  DialogActionButtons,
  DialogBody,
  DialogContainer,
  DialogCross,
  DialogTitle,
  IDialog,
} from '.';
import { CloseIcon } from './assets/CloseIcon';

interface Props extends IDialog {
  removeDialog(id: string): void;
}

export const Dialog: React.FC<Props> = ({
  id = '',
  title,
  body,
  onCancel,
  onContinue,
  removeDialog,
  continueOnly,
  cancelText,
  continueText,
  closeOnBackdropClick,
  showCrossOnTop,
  continueButtonColor,
  continueButtonTextColor,
  buttonsColor,
  buttonsTextColor,
}) => {
  const handleClose = () => {
    removeDialog(id);
  };
  const handleCancel = async () => {
    if (!onCancel) return handleClose();
    try {
      await onCancel();
    } finally {
      handleClose();
    }
  };
  const handleContinue = async () => {
    if (!onContinue) return handleClose();
    try {
      await onContinue();
    } finally {
      handleClose();
    }
  };

  return (
    <Backdrop
      onClick={() => closeOnBackdropClick && handleClose()}
      id={id}
      aria-modal
      aria-haspopup
    >
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        <DialogTitle>
          {title && title}
          {showCrossOnTop && (
            <DialogCross onClick={handleClose}>{<CloseIcon />}</DialogCross>
          )}
        </DialogTitle>
        <DialogBody>{body}</DialogBody>
        <DialogActionButtons>
          {!continueOnly && (
            <DialogActionButton
              onClick={handleCancel}
              background={buttonsColor || ''}
              textColor={buttonsTextColor || ''}
            >
              {cancelText || 'Cancel'}
            </DialogActionButton>
          )}
          <DialogActionButton
            onClick={handleContinue}
            background={continueButtonColor || buttonsColor || ''}
            textColor={continueButtonTextColor || buttonsTextColor || ''}
          >
            {continueText || 'Ok'}
          </DialogActionButton>
        </DialogActionButtons>
      </DialogContainer>
    </Backdrop>
  );
};
