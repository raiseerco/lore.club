import React, { ReactNode, createContext, useContext, useState } from "react";

interface BalanceContextType {
  balance: number;
  setBalance: (newBalance: number) => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(0);

  const handleSetBalance = (newBalance: number) => {
    setBalance(newBalance);
  };

  return (
    <BalanceContext.Provider value={{ balance, setBalance: handleSetBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (context === undefined) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};
