function ToggleLines(props){
    return(
        <div>
            <button className="lineButton" id="gridLines" onClick={() => props.toggleLine()}>
            Toggle Grid Lines
            </button>
        </div>
    )
}

export default ToggleLines