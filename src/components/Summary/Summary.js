import React from 'react'
import SummaryItems from '../SummaryItems/SummaryItems';

export default function Summary(props) {
        const summary = Object.keys(props.selected).map((feature, idx) => {
            return (<SummaryItems feature={feature} idx={idx}selected={props.selected}/>);
        });
    return(
        <>
            {summary}
        </>
    );
}