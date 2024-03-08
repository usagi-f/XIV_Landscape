'use client';

import * as React from 'react';

type ModalContextType = {
  url: string | null;
  updateUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

const ModalContext = React.createContext<ModalContextType>({
  url: null,
  updateUrl: () => {},
});

export const ModalContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [url, updateUrl] = React.useState<string | null>(null);
  return (
    <ModalContext.Provider value={{ url, updateUrl }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType =>
  React.useContext(ModalContext);
