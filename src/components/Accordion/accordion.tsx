import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any)=> void
}

export function Accordion(props: AccordionPropsType) {
    // if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            />}

        </div>
    }

        // return <div>
        //     <AccordionTitle title={props.titleValue}/>
        //     <AccordionBody/>
        // </div>

// }
export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> {props.onChange()}}>-- {props.title} --</h3>
    )
}
type AccordionBodyPropsType ={
    items: ItemType[]
    onClick: (value: any)=> void
}
export function AccordionBody(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i,index)=> <li
                onClick={() => {props.onClick(i.value)}}
                key={index}>
                {i.title}
            </li>)}
        </ul>
    )
}

