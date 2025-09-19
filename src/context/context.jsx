import React from 'react'
import { createContext, useContext, useState } from 'react';
import { PATH } from '../hooks/PATH';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ modalVisible, setModalVisible, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
