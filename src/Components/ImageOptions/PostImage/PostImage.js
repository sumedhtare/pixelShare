function PostImage(props){

    
    return (
        <div>
          <button className="postButton" onClick={(event) => props.postImg(event)}>Post</button>
        </div>
     
    )
}

export default PostImage