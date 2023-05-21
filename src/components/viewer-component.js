import React, { useContext, useState } from 'react';

import { StructureContext } from '../store/structure-context';
const ViewerComponent = (props) => {
  const { structure } = useContext(StructureContext);
  return (
    <div className="component">
      Viewer Component: {JSON.stringify(structure)}
    </div>
  );
};
export default ViewerComponent;
