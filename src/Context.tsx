import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.index.css';

import { IDialog, Dialog } from '.';
import { genID } from './helpers';

interface DialogManager {
  dialogs: IDialog[];
  createDialog: (dialog: IDialog) => void;
  removeDialog: (id: string) => void;
}

export const DialogContext = createContext<DialogManager>({
  dialogs: [],
  createDialog: () => null,
  removeDialog: () => null,
});

export const DialogProvider: React.FC = ({ children }) => {
  const [dialogs, setDialogs] = useState<IDialog[]>([]);

  const createDialog = (dialog: IDialog) => {
    setDialogs((prevDialogs) => [...prevDialogs, { ...dialog, id: genID() }]);
  };

  const removeDialog = (id: string) => {
    setDialogs((prevDialogs) => prevDialogs.filter((el) => el.id !== id));
  };

  useEffect(() => {
    document.body.className = dialogs.length ? 'noscroll' : '';

    const modalsRoot = document.getElementById('modals-root');

    if (!modalsRoot) {
      const root = document.createElement('div');
      root.id = 'modals-root';
      document.body.append(root);
      return;
    }

    ReactDOM.render(
      <div className="modals-container">
        {dialogs.map((dialog) => (
          <Dialog {...dialog} key={dialog.id} removeDialog={removeDialog} />
        ))}
      </div>,
      modalsRoot
    );
  }, [dialogs]);

  return (
    <DialogContext.Provider value={{ dialogs, createDialog, removeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};
