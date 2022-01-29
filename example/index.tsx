import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DialogProvider, useDialog } from '../src';

const App = () => {
  return (
    <DialogProvider timeout={2500}>
      <div>
        <Component />
      </div>
    </DialogProvider>
  );
};
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
            onContinue() {
              console.log('onContinue callback');
            },
            onCancel() {
              console.log('onCancel callback');
            },
          })
        }
      >
        click me
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
