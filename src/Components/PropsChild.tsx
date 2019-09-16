import React, { useState } from "react";
import { string } from "prop-types";

const PropsChild: React.FC<{ value: any; updateState: any }> = props => {
  const [stateObject, setStateObject] = useState({
    name: "string",
    count: 0
  });

  const handleClick = () => {
    // console.log("handle Click");
    setStateObject({
      name: "hoge",
      count: stateObject.count + 1
    });
    props.updateState(stateObject);
  };
  // valueを表示
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        {props.children}
      </button>
    </div>
  );
};

export default PropsChild;
