'use client'

import {
  createContext,
  useState,
} from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
    const [showPreloader, setShowPreloader] = useState(true);

    return (
      <LayoutContext.Provider value={{ showPreloader, setShowPreloader }}>
        { children }
      </LayoutContext.Provider>
    );
};

export { LayoutContext, LayoutProvider };