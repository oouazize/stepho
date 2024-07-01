'use client';
import { createContext, useContext } from 'react';

const VisibilityContext = createContext<{
  hideValues: boolean;
  setHideValues: (hide: boolean) => void;
}>({
  hideValues: false,
  setHideValues: () => {},
});

export default VisibilityContext