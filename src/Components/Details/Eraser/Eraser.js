function Eraser(props){
    return (
        <div>
            <button 
                className="eraseBtn" 
                onClick={() => props.onToggle()}
                style={{
                    backgroundColor: props.eraser? "black" : 'rgb(233, 233, 233)',
                    color: props.eraser? "white" : "black"
                    }}
                
                >Toggle Eraser</button>
        </div>
    )
}

export default Eraser