import { createContext, useState, useEffect } from "react";
import { PROSPECTDATA } from "../ProspectData";

export const ProspectContext = createContext({
  prospectData: [],
  widgetMetrics: {},
  addProspect: () => {},
  updateProspect: () => {},
  deleteProspect: () => {},
});

const ProspectContextProvider = ({ children }) => {
  const [prospectData, setProspectData] = useState(PROSPECTDATA);
  const [widgetMetrics, setWidgetMetrics] = useState({
    all: 0,
    cold: 0,
    warm: 0,
    contract: 0,
  });

  useEffect(() => {
    // Update widget metrics dynamically
    const updatedMetrics = {
      all: prospectData.length,
      cold: prospectData.filter((p) => p.role === "cold").length,
      warm: prospectData.filter((p) => p.role === "warm").length,
      contract: prospectData.filter((p) => p.role === "contract").length,
    };
    setWidgetMetrics(updatedMetrics);
  }, [prospectData]);

  const addProspect = (newProspect) => {
    setProspectData((prev) => [...prev, newProspect]);
  };

  const updateProspect = (id, updatedData) => {
    setProspectData((prev) =>
      prev.map((prospect) => (prospect.key === id ? { ...prospect, ...updatedData } : prospect))
    );
  };

  const deleteProspect = (id) => {
    setProspectData((prev) => prev.filter((prospect) => prospect.key !== id));
  };

  return (
    <ProspectContext.Provider
      value={{ prospectData, widgetMetrics, addProspect, updateProspect, deleteProspect }}
    >
      {children}
    </ProspectContext.Provider>
  );
};

export default ProspectContextProvider;
