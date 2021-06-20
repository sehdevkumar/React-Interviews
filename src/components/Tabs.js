import React,{useState} from 'react'
import Pending from './Tabs/Pending'
import Executed from './Tabs/Executed'
import Executing from './Tabs/Executing'
import Completed from './Tabs/Completed'
import SubTabs from './SubTabs/SubTabs'
import './css/Tabs.css'
function Tabs() {

    const [getFlag,setFlag] = useState(false)

    return (
        <>  &nbsp;&nbsp; <h3 style={{marginLeft:"50px"}}>Agri-Input Master Maintance</h3>
        <br></br>
             <div className='Tabs-Container'>
                <Pending />
                <Executing flag={setFlag} />
                <Executed />
                <Completed />

            </div>
           { getFlag && <SubTabs/>}
        </>
    )
}

export default Tabs
