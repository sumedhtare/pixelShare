import {Context} from '../../Context/Context'
import { useContext } from 'react'
import SquareGrid from './SquareGrid';


function Grid() {
    const ctx = useContext(Context)

  // let gridSide = ctx.sideValue;

  // let squareArr = [];

  // for (let i = 0; i < gridSide ** 2; i++) {
  //   squareArr.push(
  //     <div 
  //       key={i}
  //       className="square" 
  //       style={{ 
  //               border: ctx.displayLines? "solid 1px black" : 'none',
  //               backgroundColor: `${ctx.bkGroundColor}`
  //             }}
  //       onMouseDown={(e) => {ctx.squareMouseDown(e)}}
  //       id={i}
  //       ></div>
  //   );
  // }



  let squareArr = [];

  for (let i = 0; i < ctx.sideValue ** 2; i++) {
    squareArr.push(i);
  }

  const squares = squareArr.map(item => (
        <SquareGrid 
          key={item}
          id={item}
          gridSide = {ctx.sideValue}
          displayLines = {ctx.displayLines}
          //bkGroundColor = {ctx.bkGroundColor}
          squareMouseDown = {ctx.squareMouseDown}
          
        />
  ))


  return (
    <div className="columnGrid" id="capture">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${ctx.sideValue}, 1fr)`,
          gridTemplateRows: `repeat(${ctx.sideValue}, 1fr)`,
          backgroundColor: `${ctx.bkGroundColor}`
        }}
        onMouseDown={() => ctx.startDraw()}
        onMouseUp={() => ctx.stopDraw()}
        onMouseLeave={() => ctx.stopDraw()}
        onMouseOver={(event) => ctx.dragDraw(event)}
        
        onTouchStart={() => ctx.startDraw()}
        onTouchMove={(event) => ctx.touchDragDraw(event)}
        onTouchEnd={() => ctx.stopDraw()}
        onTouchCancel={() => ctx.stopDraw()}
        
      >
        {squares}
        {/* {squareArr} */}
      </div>
    </div>
  );
}

export default Grid;
