import React from "react";

function SquareGrid(props) {


  return (
    <React.Fragment>
      <div
        key={props.id}
        className="square"
        style={{
          border: props.displayLines ? "solid 1px black" : "none",
          //backgroundColor: `${props.bkGroundColor}`,
        }}
        onMouseDown={(e) => {
          props.squareMouseDown(e);
        }}
        onTouchStart={(e) => {
          props.squareMouseDown(e);
        }}
        
      ></div>
    </React.Fragment>
  );
}

export default SquareGrid;
