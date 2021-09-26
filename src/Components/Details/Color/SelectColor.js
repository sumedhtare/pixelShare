function SelectColor(props){
    return(
        <div className="colorSelector">
            Select color:
            <input 
            type="color" 
            className="colorSelect" 
            value={props.color} 
            onChange={(event) => props.setColor(event.target.value)}
            />
        </div>
    )
}

export default SelectColor