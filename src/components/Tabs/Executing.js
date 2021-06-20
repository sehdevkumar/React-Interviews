import React,{useState} from 'react'
function Executing(props) {
  
    const [getTabBackground,setTabBackground] = useState("#595959")
    const [getFlag,setFlag] = useState(false)
    const {flag} = props
  



    const iconHandler = ()=>{
        document.querySelector('.Tabs-Container .tab .down-icon').classList.toggle('active')
        if(getFlag){
            setTabBackground("#595959")
            setFlag(false)
            flag(false)
        }else{
            setTabBackground("#333")
            setFlag(true)
            flag(true)
        }
       
    }


    return (
        <>
            <div onClick={iconHandler}  style={{textDecoration:'none',background:getTabBackground}} className='tab'>
         
                <div className='tab-count' style={{'background':'yellow',color:'black'}}>2</div>
                EXECUTING
            <div className='down-icon'></div>
          </div>
          <br></br>
       


        
        
        </>
    )
}

export default Executing
