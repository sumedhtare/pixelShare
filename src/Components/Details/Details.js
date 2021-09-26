import SelectColor from "./Color/SelectColor"
import Slider from "./Slider/Slider"
import {Context} from '../../Context/Context'
import {useContext} from 'react'
import FillColor from "./FillColor/FillColor"
import ToggleLines from "./ToggleLines/ToggleLines"
import RefreshGrid from "./RefreshGrid/RefreshGrid"
import Eraser from "./Eraser/Eraser"


function Details(){

    const ctx = useContext(Context)

    return(
        <div className="columnDetails">
            <Slider value={ctx.sideValue} onChange={ctx.onSliderChange}/>
            <SelectColor color={ctx.color} setColor={ctx.selectColor}/>
            <div className="allButtons">
                <Eraser onToggle={ctx.toggleErase} eraser={ctx.erase}/>
                <FillColor toggleFillColor={ctx.colorFill}/>
                <ToggleLines toggleLine={ctx.toggleLineDisplay}/>
                <RefreshGrid refresh={ctx.refreshGrid}/>
            </div>
        </div>
        
    )
}

export default Details