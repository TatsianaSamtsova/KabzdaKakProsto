import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    // if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}

        </div>
    }

        // return <div>
        //     <AccordionTitle title={props.titleValue}/>
        //     <AccordionBody/>
        // </div>

// }

export type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> {props.onClick(!props.collapsed)}}>-- {props.title} --</h3>
    )
}

export function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

