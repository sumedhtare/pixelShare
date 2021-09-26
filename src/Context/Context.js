import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import html2canvas from 'html2canvas'
import { firestore } from '../Firebase/firebase';
import { AuthContext } from './AuthContext';

const Context = React.createContext()

function ContextProvider(props){

    const authCtx = useContext(AuthContext)

    const database = firestore.collection('pixelImg')

    const [sideValue, setSideValue] = useState(20)
    const [color, setColor] = useState(`#000000`)
    const [mouseDown, setMouseDown] = useState(false)
    const [bkGroundColor, setBkGroundColor] = useState(`#FFFFFF`)
    const [displayLines, setDisplayLines] = useState(true)
    const [erase, setErase] = useState(false)
    const [imageName, setImageName] = useState('')
    const [imageContainer, setImageContainer] = useState([])
    const [userContent, setUserContent] = useState([]);


    


    function onSliderChange(value){
        setSideValue(value)
    }

    function selectColor(value){
        setColor(value)
    }


    function squareMouseDown(e){
        if(erase){
            e.target.style.backgroundColor = null
        } else {
            e.target.style.backgroundColor = color
        }
    }


    function stopDraw(){
        setMouseDown(false)
    }

    function startDraw(){
        setMouseDown(true)
    }

    function dragDraw(event){
        if(mouseDown){
            if(event.target.className === 'square'){
                if(erase){
                    event.target.style.backgroundColor = null
                } else {
                event.target.style.backgroundColor = color
                }
            }
        }
    }


    function touchDragDraw(event){
        //console.log(event.touches[0].target.className)
        if(mouseDown){
            if(event.touches[0].target.className === 'square'){
                let x = event.touches[0].clientX
                let y = event.touches[0].clientY
                let hoveredElem = document.elementFromPoint(x, y)
                //console.log(hoveredElem.className)
                if(hoveredElem.className === "square"){
                    if(erase){
                        hoveredElem.style.backgroundColor = null
                    } else {
                        hoveredElem.style.backgroundColor = color
                    }

                } else {
                    setMouseDown(false)
                }
            } 
        }
        
    }


    function toggleErase(){
        setErase(prevState => !prevState)
    }


    function colorFill(){
        setBkGroundColor(color)
    }

    function toggleLineDisplay(){
        setDisplayLines(prevState => !prevState)
    
    }

    function refreshGrid(){
        document.querySelector(".grid").querySelectorAll("div").forEach(div => 
            div.style.backgroundColor = null )
        setBkGroundColor('#FFFFFF')
        setSideValue(20)
        setDisplayLines(true)
        setImageName("")
    }


    function SaveImage(e){
        e.preventDefault()
        html2canvas(document.querySelector("#capture")).then(canvas => {
            let data = canvas.toDataURL("image/png")
            let newImg = {name: imageName===""? "untitled": imageName, imgData: data}
            setImageContainer(prevState => prevState.concat(newImg))
            refreshGrid()
            
        })
    }


    async function PostToCloud(e){
        e.preventDefault()
         await html2canvas(document.querySelector("#capture")).then(canvas => {
            let data = canvas.toDataURL("image/png")
            let timeStamp = Math.floor(Date.now()/1000)
            let emailId = authCtx.currentUser.email
            let identifier = authCtx.currentUser.uid
            let date = new Date()
            let day = date.getDate();
            let month = date.getMonth()+1;
            let year = date.getFullYear();
             
            let imgToUpload = {
                name: imageName===""? "untitled": imageName, 
                timestamp: timeStamp, 
                imgData: data,
                email: emailId,
                uid: identifier,
                createdAt: `${day}/${month}/${year}`
            }
            
            database.add(imgToUpload)
            
        
             //     const collectionRef = collection(db, "pixelImg")
        //     const payload = imgToUpload
        //     const docRef = addDoc(collectionRef, payload)
        //     console.log(docRef.id)
        //     console.log("posted")
        })
        refreshGrid()
         
    }

    async function deleteContent(item){
        await database.doc(item).delete()
    }


    useEffect(() => {
        if(authCtx.currentUser){
        return database
            .orderBy("timestamp", 'desc')
            .onSnapshot(
                (snapshot) => {
                    //snapshot.forEach(doc => console.log(doc.data())
                    setUserContent(snapshot.docs.map(doc => 
                        {return {...doc.data(), id: doc.id}}
                        ))               
                })
            } else {
                return null
            }
            
    }, [authCtx.currentUser])

    

    // useEffect(() => 
    //     onSnapshot(collection(db, "pixelImg"), (snapshot) => {
    //         //console.log(snapshot.docs.map((doc) => doc))
    //         setUserContent(snapshot.docs.map((doc) => doc.data()))
    //     })   
    // ,[])



    function imageNameHandler(value){
        setImageName(value)
    }

    //console.log(mouseDown)
    // console.log(color)
    // console.log(imageContainer)
    // console.log(imageName)
    
    return(
        <Context.Provider 
            value={{
                sideValue, onSliderChange, 
                color, selectColor, squareMouseDown, 
                stopDraw, startDraw, dragDraw, 
                bkGroundColor, colorFill,
                displayLines, toggleLineDisplay,
                refreshGrid, toggleErase, erase,
                SaveImage, imageNameHandler, imageName, imageContainer,
                touchDragDraw, PostToCloud, userContent, deleteContent
                
                    }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}