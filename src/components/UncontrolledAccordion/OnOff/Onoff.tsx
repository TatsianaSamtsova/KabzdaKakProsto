import React, {useState} from "react";
import s from "./OnOff.module.css"

export type OnOffPropsType = {
    // on: boolean
}

function OnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(true)

    const onBackgroundColor = {backgroundColor: on ? "green" : "white"}
    const offBackgroundColor = {backgroundColor: on ? "white" : "red"}
    const indicatorBackgroundColor = {backgroundColor: on ? "green" : "red"}


    return (
        <div>
            <div style={onBackgroundColor} className={s.onStyle} onClick={() => {
                setOn(true)
            }}> On
            </div>
            <div style={offBackgroundColor} className={s.offStyle} onClick={() => {
                setOn(false)
            }}> Off
            </div>
            <div style={indicatorBackgroundColor} className={s.indicator}></div>
        </div>
    )
}

export default OnOff