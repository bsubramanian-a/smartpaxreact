import React from 'react';

interface CellProps {
    title: string;
    type: string;
}


const Cell = (props:CellProps) => {
    return (
        <>
            {props.type == 'firstcolumn' && 
                <div className='first-div'>{props.title}</div>
            }
            {props.type == 'header' && 
                <div className='inner-div'>{props.title}</div>
            }
        </>
    )
}

export default Cell;