import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {AccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";




export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,

} ;

export const MenuCollapsedMode: Story<AccordionPropsType> = (args) => <UncontrolledAccordion
    titleValue = {"menu"}
   />;



