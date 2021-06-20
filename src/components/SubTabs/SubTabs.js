import React,{useState} from 'react'
import UndoBatch from './UndoBatch'
import AssignSuppliers from './AssignSuppliers'
import GeneratePO from './GeneratePO'
import OrdersData from './SubTabsComponents/OrdersData'
import '../css/SubTabs.css'
function SubTabs(props) {
   
    
    const [getContainerFlag,setContainerFlag] = useState(false)


    return (
        <>
            <div className='Sub-Tabs-Container'>
                <UndoBatch/>
                <AssignSuppliers/>
                <GeneratePO flag={getContainerFlag} containerFlag={setContainerFlag} />
                
            </div>

               <div className='Container'>
                     {  getContainerFlag && <OrdersData/>}
               </div>
           
        </>
    )
}

export default SubTabs
