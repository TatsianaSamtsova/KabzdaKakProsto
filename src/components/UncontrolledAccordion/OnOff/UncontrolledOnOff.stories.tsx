import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {OnOff} from "./Onoff";
import { OnOffPropsType } from '../../Accordion/UncontrolledOnOff/UncontrolledOnoff';




export default {
    title: 'UncontrolledOnOff',
    component: OnOff,

} ;

export const OnMode: Story<OnOffPropsType> = (args) => <OnOff />;

