import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
  console.log("value ",value);
  let updateValue = value[1];
  return (
    <div >
      Child number {value[0]}
      <button onClick={()=> { updateValue(++value[0]) }}>Update value</button>
    </div>
  );
}

export default Child;
