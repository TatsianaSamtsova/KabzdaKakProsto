import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {RatingPropsType, UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,

} ;

export const EmptyRating: Story<RatingPropsType> = (args) => <UncontrolledRating  />;

