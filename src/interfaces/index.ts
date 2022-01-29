export interface IDialog extends DialogActions, DialogCustomization {
  id?: string;
  title?: string;
  body: React.ReactElement | string;
}

export interface DialogActions {
  onContinue?: () => Promise<void> | void;
  onCancel?: () => Promise<void> | void;
}

export interface DialogCustomization {
  continueOnly?: boolean;

  continueText?: string;
  cancelText?: string;

  closeOnBackdropClick?: boolean;

  showCrossOnTop?: boolean;

  continueButtonColor?: string;
  continueButtonTextColor?: string;
  buttonsColor?: string;
  buttonsTextColor?: string;
}

export interface DialogActionButtonProps {
  background: string;
  textColor: string;
}