// write the text components here

import React from "react";

const Text = (props) => {
  return (
    <div>
      <h4 className="text-start pb-2 my-3 border-bottom">{props.text}</h4>
    </div>
  );
};

export default Text;
