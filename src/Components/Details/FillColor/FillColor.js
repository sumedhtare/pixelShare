function FillColor(props){
    return (
        <div className="colorFill">
            <button 
                className="fillColorBtn" 
                id="colorGrid" 
                onClick={() => props.toggleFillColor()}
                >
                    Change Background Color
                </button>
        </div>
    )
}

export default FillColor