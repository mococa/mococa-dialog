import { useContext } from 'react';
import { DialogContext } from '.';

export const useDialog = () => {
  const { createDialog } = useContext(DialogContext);
  return createDialog;
};
