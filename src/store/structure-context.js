/* import React, { createContext, useContext, useState } from 'react';

const StructureContext = createContext({
  structure: {},
  updateStructure: () => {},
  updateStructureId: () => {},
});

const StructureContextProvider = (props) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

  export const StructureContext = createContext()

const StructureContextProvider = (props) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

  return (
    <StructureContext.Provider value={{isGlobalSpinnerOn, setGlobalSpinner}}>
        {props.children}
    </StructureContext.Provider>
  )
}

export default StructureContextProvider */

import React, { useState, createContext } from 'react';

export const StructureContext = createContext();

const StructureContextProvider = (props) => {
  const [structure, setStructure] = useState({
    name: 'default',
    geometry: { width: 100, height: 20 },
  });

  return (
    <StructureContext.Provider value={{ structure, setStructure }}>
      {props.children}
    </StructureContext.Provider>
  );
};

export default StructureContextProvider;
