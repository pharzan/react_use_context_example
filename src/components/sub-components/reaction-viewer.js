import React from 'react';

const ReactionViewer = (props) => {
  const { name, status } = props.parameters;
  return (
    <div className="sub-component">
      {name}:
      <span className={status ? 'red' : 'green'}>{status.toString()}</span>
    </div>
  );
};
export default ReactionViewer;
