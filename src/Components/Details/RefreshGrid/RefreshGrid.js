function RefreshGrid(props){
    return (
        <div>
            <button className="refresh" onClick={() => {props.refresh()}}>
            Refresh Grid
            </button>
        </div>
    )
}

export default RefreshGrid