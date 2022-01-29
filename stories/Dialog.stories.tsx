import { Story } from '@storybook/api';
import { Meta } from '@storybook/react';
import { DialogProvider, useDialog, Dialog as DialogComponent } from '../src';

export default {
  title: 'Dialog',
  component: DialogComponent,
} as Meta;

const Component = () => {
  const createDialog = useDialog();
  return (
    <div>
      <button
        onClick={() =>
          createDialog({
            body: <span>Test</span>,
            closeOnBackdropClick: true,
            showCrossOnTop: true,
            continueButtonColor: '#e8a',
          })
        }
      >
        click me
      </button>
    </div>
  );
};

export const Dialog = () => {
  return (
    <DialogProvider>
      <div>
        <Component />
      </div>
    </DialogProvider>
  );
};
