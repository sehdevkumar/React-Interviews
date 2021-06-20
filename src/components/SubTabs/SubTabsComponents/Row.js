import React, { useState,useRef } from 'react'
import Table from './Table'
import Data from '../DataSource/Data'
import { CSVLink } from 'react-csv'
import TableData from '../DataSource/TableData'
function Row(props) {

    const [getFlag, setFlag] = useState(false)
    const arrowRef = useRef()
    const { data, index } = props

    const handlerFlag = (e) => {
        
    

            if (getFlag){
                setFlag(false)
                document.querySelector(".arrow"+index).classList.remove('active')
            }
            else{
            
                setFlag(true)
                document.querySelector(".arrow"+index).classList.add('active')
            }
      
      
    }



    return (
        <>
            <div id='row'>

                <div className='order-id'  id={data.order_id} ref={arrowRef} onClick={handlerFlag}>
                    <input type="radio" name="check" id="allow" />
                    {data.order_id}

                    <div className={"arrow"+index} id="arrow"></div>

                </div>
                <div style={{width:'5px',height:"80%",background:"#FFFFFF"}}></div>

                <div className='order-user'>
                    <img alt="" src={data.profile} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                    <div>  {data.name}
                        <br />
                        {data.date}
                    </div>
                </div>
                <div style={{width:'5px',height:"80%",background:"#FFFFFF"}}></div>
                <div className='order-file'>
                    <img alt="" src={data.filepic} style={{ width: '40px', height: '40px', borderRadius: '.2rem', marginRight: '10px' }} />
                    <div>{data.filename}</div>
                </div>


                <div className='download-file'>
                    
                    <CSVLink data={TableData}>
                       <img alt="" src={data.downloadpic} style={{ width: '40px', height: '40px', borderRadius: '.2rem', marginRight: '10px', background: 'none', cursor: 'pointer' }} />
                    </CSVLink>
                </div>
            </div>
            {getFlag && <Table />}
        </>
    )
}

export default Row
