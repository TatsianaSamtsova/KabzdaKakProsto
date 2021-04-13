import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {Accordion, AccordionPropsType} from "./accordion";
import {action} from "@storybook/addon-actions";




export default {
    title: 'Accordion',
    component: Accordion,

} ;
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")


export const MenuCollapsedMode: Story<AccordionPropsType> = (args) => <Accordion
    onChange={callback}
    titleValue = {"menu"}
    collapsed = {true}
    items={[]}
    onClick={onClickCallback}

/>;
export const UsersUncollapsedMode: Story<AccordionPropsType> = (args) => <Accordion
    onChange={callback}
    titleValue = {"users"}
    collapsed = {false}
    items={[
        {title:"Anna", value: 1},
        {title:"Oleg", value: 2},
        {title:"Victor", value: 3},
        {title:"Max", value: 4}
        ]}
    onClick={onClickCallback}
/>;

export const ModeChange: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        onChange={() => setValue(!value)}
        titleValue={"users"}
        collapsed={value}
        items={[
            {title: "Anna", value: 1},
            {title: "Oleg", value: 2},
            {title: "Victor", value: 3},
            {title: "Max", value: 4}
        ]}
        onClick={(value) => {
            alert(`user with ID ${value} should be happy`)
        }}/>;
}

