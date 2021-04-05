import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {Rating, RatingPropsType, ValueType} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating,

} ;

export const EmptyRating: Story<RatingPropsType> = (args) => <Rating value={0} onClick={(x)=>x} />;
export const Rating1: Story<RatingPropsType> = (args) => <Rating value={1} onClick={(x)=>x} />;
export const Rating2: Story<RatingPropsType> = (args) => <Rating value={2} onClick={(x)=>x} />;
export const Rating3: Story<RatingPropsType> = (args) => <Rating value={3} onClick={(x)=>x} />;
export const Rating4: Story<RatingPropsType> = (args) => <Rating value={4} onClick={(x)=>x} />;
export const Rating5: Story<RatingPropsType> = (args) => <Rating value={5} onClick={(x)=>x} />;
export const RatingChange: Story<RatingPropsType> = (args) =>{
   const [rating, setRating] = useState<ValueType>(3)
   return <Rating value={rating} onClick={setRating} />;
}

