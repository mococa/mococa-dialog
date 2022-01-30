# mococa-dialog

![image](https://user-images.githubusercontent.com/13316723/151679932-64164783-4caf-4663-91c1-88c0c9ede425.png)

### Installation

```
npm install mococa-dialog
```

### Usage

To use it, you need to wrap your application with `DialogProvider`.

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { DialogProvider } from 'mococa-dialog';

ReactDOM.render(
  <React.StrictMode>
    <DialogProvider>
      <App />
    </DialogProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Then, to use it in your component:

```js
import { useDialog } from 'mococa-toastr';

function App() {
  const createDialog = useDialog();

  const openDialog = () => {
    createDialog({
      body: <span>Test</span>,
      closeOnBackdropClick: true,
      showCrossOnTop: true,
      continueButtonColor: '#e8a',
      onContinue() {
        alert('onContinue callback');
      },
      onCancel() {
        alert('onCancel callback');
      },
    });
  };

  return (
    <div className="App">
      <button onClick={openDialog}>Click me</button>
    </div>
  );
}
```

Simple as that
