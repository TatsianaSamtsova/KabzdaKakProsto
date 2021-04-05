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

export const MenuCollapsedMode: Story<AccordionPropsType> = (args) => <Accordion
    onClick={callback}
    titleValue = {"menu"}
    collapsed = {true}

/>;
export const UsersUncollapsedMode: Story<AccordionPropsType> = (args) => <Accordion
    onClick={callback}
    titleValue = {"users"}
    collapsed = {false}
/>;

export const ModeChange: Story<AccordionPropsType> = (args) =>{
   const [value, setValue] = useState<boolean>(true)
   return <Accordion
       onClick={setValue}
       titleValue = {"users"}
       collapsed = {value}/>;
}

