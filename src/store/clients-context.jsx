import { createContext, useState } from "react";

export const ClientContext = createContext({
  clientData: {
    activeClients: {},
    inactiveClients: {},
    totalClients: {},
    activeAmount: {},
    inactiveAmount: {},
    totalAmount: {},
  },
  updateClientMetrics: () => {},
});

const ClientContextProvider = ({ children }) => {
  const [clientData, setClientData] = useState({
    activeClients: 2,
    inactiveClients: 2,
    totalClients: 4,
    activeAmount: 2300,
    inactiveAmount: 200,
    totalAmount: 2500,
  });

  function updateClientMetrics(type, counts, amount) {
    setClientData((prev) => {
      let newState = { ...prev };

      if (type === "active") {
        newState.activeAmount += amount;
        newState.activeClients += counts;
      } else if (type === "inactive") {
        newState.inactiveAmount += amount;
        newState.inactiveClients += counts;
      }

      newState.totalAmount = newState.activeAmount + newState.inactiveAmount;
      newState.totalClients = newState.activeClients + newState.inactiveClients;

      return newState;
    });
  }

  return <ClientContext.Provider value={{clientData, updateClientMetrics}}>{children}</ClientContext.Provider>;
};

export default ClientContextProvider;
