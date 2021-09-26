import BackButton from "../SwitchPage/BackButton";
import ContentSquares from "./ContentSquares";
import {Context} from '../../Context/Context'
import { useContext } from 'react'


function MainContentContainer() {

    const ctx = useContext(Context)
    
    //ctx.userContent.sort((a,b) => b.timestamp - a.timestamp)



    let allContentArr = ctx.userContent.map(item => (
        <ContentSquares 
        key={item.id}
        identifier={item.id}
        imgData={item.imgData}
        name={item.name}
        email={item.email}
        date={item.createdAt}
        deleteItem={ctx.deleteContent}
        />
    ))

    //console.log(ctx.userContent)
    
    


    return (
        <div className="mainContentContainer">
        <BackButton />
        <div className="userContentContainer">
            {allContentArr}
        </div>
        </div>
    );
    }

export default MainContentContainer;
