import SaveImage from "./SaveImage/SaveImage"
import { Context } from "../../Context/Context"
import { useContext } from "react"


function ImageOptions(){

    const ctx = useContext(Context)



    return (
        <div className="footerArea">
            <SaveImage 
                saveImg={ctx.SaveImage} 
                imgName={ctx.imageName} 
                imgNameHandler={ctx.imageNameHandler}
                postImg={ctx.PostToCloud}   
                />
            {/* <PostImage 
                postImg={ctx.PostToCloud}            
                /> */}
        </div>
    )
}

export default ImageOptions