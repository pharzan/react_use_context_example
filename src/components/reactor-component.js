import React, { useContext, useEffect, useState } from 'react';

import { StructureContext } from '../store/structure-context';
import ReactionViewer from './sub-components/reaction-viewer';
const ReactorComponent = (props) => {
  const { structure } = useContext(StructureContext);

  const [structureChanged, setStructureChanged] = useState(false);

  const [nameChanged, setNameChanged] = useState(false);
  const [geometryChanged, setGeometryChanged] = useState(false);
  const [geometryWidthChanged, setGeometryWidthChanged] = useState(false);
  const [geometryHeightChanged, setGeometryHeightChanged] = useState(false);

  useEffect(() => {
    setNameChanged(true);
    setTimeout(() => {
      setNameChanged(false);
    }, 2000);
  }, [structure.name]);

  useEffect(() => {
    setGeometryChanged(true);
    setTimeout(() => {
      setGeometryChanged(false);
    }, 2000);
  }, [structure.geometry]);

  useEffect(() => {
    setGeometryWidthChanged(true);
    setTimeout(() => {
      setGeometryWidthChanged(false);
    }, 2000);
  }, [structure.geometry.width]);

  useEffect(() => {
    setGeometryHeightChanged(true);
    setTimeout(() => {
      setGeometryHeightChanged(false);
    }, 2000);
  }, [structure.geometry.height]);

  useEffect(() => {
    setStructureChanged(true);
    setTimeout(() => {
      setStructureChanged(false);
    }, 2000);
  }, [structure]);

  return (
    <div className="component">
      Reactor component
      <div className="structure">
        <h2>Structure</h2>
        <ReactionViewer
          parameters={{
            name: 'Structure',
            status: structureChanged,
          }}
        />
        <div className="name">
          <h3>Name</h3>
          <ReactionViewer
            parameters={{
              name: 'Name',
              status: nameChanged,
            }}
          />
        </div>
        <div className="geometry">
          <h3>Geometry</h3>
          <ReactionViewer
            parameters={{
              name: 'Geometry',
              status: geometryChanged,
            }}
          />
          <div>
            <div>
              <h4>Width</h4>
              <ReactionViewer
                parameters={{
                  name: 'Geometry.Width',
                  status: geometryWidthChanged,
                }}
              />
            </div>
            <div>
              <h4>Height</h4>
              <ReactionViewer
                parameters={{
                  name: 'Geometry.Height',
                  status: geometryHeightChanged,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReactorComponent;
