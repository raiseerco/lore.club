import React, { ReactNode, createContext, useContext, useState } from "react";

interface BalanceContextType {
  balance: number;
  setBalance: (newBalance: number) => void;
  ethPrice: number;
  setEthPrice: (newEthPrice: number) => void;
  isConnected: boolean;
  setIsConnected: (newStatus: boolean) => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(0);
  const [ethPrice, setEthPrice] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleSetBalance = (newBalance: number) => {
    setBalance(newBalance);
  };
  const handleSetEthPrice = (newEthPrice: number) => {
    setEthPrice(newEthPrice);
  };
  const handleConnection = (newStatus: boolean) => {
    setIsConnected(newStatus);
  };

  return (
    <BalanceContext.Provider
      value={{
        balance,
        setBalance: handleSetBalance,
        ethPrice,
        setEthPrice: handleSetEthPrice,
        isConnected,
        setIsConnected: handleConnection,
      }}
    >
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
