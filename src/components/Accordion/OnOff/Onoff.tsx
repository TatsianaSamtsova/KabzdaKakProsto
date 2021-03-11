import React, {useState} from "react";
import s from "./OnOff.module.css"

export type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

function OnOff(props: OnOffPropsType) {


    const onBackgroundColor = {backgroundColor: props.on ? "green" : "white"}
    const offBackgroundColor = {backgroundColor: props.on ? "white" : "red"}
    const indicatorBackgroundColor = {backgroundColor: props.on ? "green" : "red"}


    return (
        <div>
            <div style={onBackgroundColor} className={s.onStyle}
                 onClick={() => {props.onClick(true)}}>
                On
            </div>
            <div style={offBackgroundColor} className={s.offStyle}
                 onClick={() => { props.onClick(false)} }>
                Off
            </div>
            <div style={indicatorBackgroundColor} className={s.indicator}></div>
        </div>
    )
}

export default OnOff