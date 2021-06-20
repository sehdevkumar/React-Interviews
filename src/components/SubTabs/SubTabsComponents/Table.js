import React,{useRef,useState} from 'react'
import '../../css/Table.css'
import TableData from '../DataSource/TableData'
import Model from './Model'
function Table() {
   
    const modelRef = useRef()
    const [getModelData,setModelData] = useState({})

    const modelPOPUP = (e)=>{
         const model =   document.querySelector("#model")
         model.classList.add("active")
         let pid = e.target.id
         console.log(pid)
         const modeldata = TableData[pid]
         setModelData(modeldata)
      

    }

    return (
        <>
            <table className="myTable">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Agri-Input Category</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Order Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                     {
                        TableData.map((item,index)=>{
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{item.id+"."}</td>
                                        <td>{item.category+"."}</td>
                                        <td><img alt="" src={item.image} style={{width:'40px',height:'40px',borderRadius:'.2rem',marginRight:'10px',background:'none'}}/></td>
                                        <td>{item.des}</td>
                                        <td>{item.quantity}</td>
                                        <td><img  alt="" onClick={modelPOPUP} className='popup' id={index} src={item.popuppic} style={{width:'40px',height:'40px',borderRadius:'.2rem',marginRight:'10px',background:'none',cursor:'pointer'}}/></td>
                                
                                    </tr>
                                </>
                            )
                        })
                     }
                </tbody>
            </table>
            
            <div ref={modelRef} id="model">
                <button onClick={()=>{ document.querySelector("#model").classList.remove("active")}} style={{padding:'6px',width:'100px',color:'red',fontSize:'24px',fontWeight:'bold'}}>&times;</button>
                 <br/>
                 <Model modelData={getModelData} />
            </div>
        </>
    )
}

export default Table
