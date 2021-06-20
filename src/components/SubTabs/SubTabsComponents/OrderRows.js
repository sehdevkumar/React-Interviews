import React from 'react'
import Row from './Row'
function OrderRows(props) {

    const { item ,indexes} = props

    return (
        <>
            {     
                <Row data={item} index={indexes}/>
            }
        </>
    )
}

export default OrderRows
