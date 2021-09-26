function Slider(props){


    return (
        <form className="sizeContainer">
            <input
              type="range"
              className="inputSide"
              name="Grid Size"
              min="10"
              max="50"
              value={props.value}
              onChange={event => props.onChange(event.target.value)}
              
            />

            <span>Grid Size: <span id="gridSizeText">{props.value} x {props.value}</span></span>
          </form>
    )
}

export default Slider