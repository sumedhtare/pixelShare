function SaveImage(props){

    
    return (
        // <form onSubmit={(e) => props.saveImg(e)}>
        //   <label htmlFor="imgName">Image Name:</label>
        //   <input type="text" id="imgName" value={props.imgName} onChange={(e) => props.imgNameHandler(e.target.value)} />
        //   <button type="submit" className="saveButton">Save</button>
        // </form>

        <div>
          <div>
            <label htmlFor="imgName">Image Name:</label>
            <input type="text" id="imgName" value={props.imgName} onChange={(e) => props.imgNameHandler(e.target.value)} />
          </div>
          <div>
            <button className="saveButton" onClick={(e) => props.saveImg(e)}>Save Locally</button>
            <button className="postButton" onClick={(event) => props.postImg(event)}>Post to Gallery</button>
          </div>
        </div>



     
    )
}

export default SaveImage