import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput Running');
  return <p>{props.show ? 'this is new' : ''}</p>;
};

export default DemoOutput;
