import React,{useState} from 'react'
import Data from '../DataSource/Data'
import OrderRows from './OrderRows'
import '../../css/OrderTable.css'

function OrdersData() {

   

    return (
        <>  
           
            <div className='Title-Bar'>
                <div>Executing Agri-Input Orders</div>
                <div>Batched By</div>
            </div>
            {
                Data.map((items,index)=>{
                    return  <OrderRows key={index} indexes={index}  item={items} />
                })
            }
        </>
    )
}

export default OrdersData
