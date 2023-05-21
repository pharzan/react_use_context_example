import React, { useContext } from 'react';

import { StructureContext } from '../store/structure-context';
const ViewerComponent = (props) => {
  const { structure, setStructure } = useContext(StructureContext);

  return (
    <div className="component">
      Changer Component
      <div>
        Name:
        <input
          onChange={(e) => {
            setStructure({ ...structure, name: e.target.value });
          }}
        />
      </div>
      <div>
        Geometry:
        <div>
          {Object.keys(structure.geometry).map((key, idx) => (
            <div key={idx}>
              label: {key}
              <input
                onChange={(e) => {
                  const geometry = {
                    ...structure.geometry,
                    [key]: e.target.value,
                  };
                  setStructure({
                    ...structure,
                    geometry,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ViewerComponent;
