import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import OnOff, {OnOffPropsType} from "./Onoff";



export default {
    title: 'OnOff',
    component: OnOff,

} ;

export const OnMode: Story<OnOffPropsType> = (args) => <OnOff on={true} onClick={x=>x}/>;
export const OffMode: Story<OnOffPropsType> = (args) => <OnOff on={false} onClick={x=>x}/>;

export const ModeChange: Story<OnOffPropsType> = (args) =>{
   const [value, setValue] = useState<boolean>(true)
   return <OnOff on={value} onClick={setValue} />;
}

