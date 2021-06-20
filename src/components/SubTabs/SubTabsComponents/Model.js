import React from 'react'

function Model(props) {
    return (
        <>
            <center><h2>Order View</h2></center>  
           Category:- <strong>{props.modelData.category}</strong>
           <br/>
           Description:- <strong>{props.modelData.des}</strong>
           <br/>
           <img alt="" src={props.modelData.image} style={{width:'200px'}}/>
        </>
    )
}

export default Model
