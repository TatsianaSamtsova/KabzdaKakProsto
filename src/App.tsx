import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/accordion";
import {Rating, ValueType} from "./components/Rating/Rating";

import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/Accordion/OnOff/Onoff";



function App() {
    let [ratingValue, setRatingValue] = useState<ValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>( false)
    let [onOffValue, setOnOffValue] = useState<boolean>(true)
    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*/!*<PageTitle title ={"This is APP component"}/>*/}
            {/*<PageTitle title ={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*!/*/}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            <Rating value={ratingValue} onClick = {setRatingValue}/>


            <OnOff on = {onOffValue} onClick={setOnOffValue}/>
            <OnOff on = {onOffValue} onClick={setOnOffValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>

}

export default App;
