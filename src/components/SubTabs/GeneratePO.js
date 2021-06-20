import React from 'react'

function GeneratePO(props) {

    const {flag,containerFlag} = props
    console.log(flag)
    const handlerFlag = ()=>{
        if(flag){
            containerFlag(false)
        }else{
            containerFlag(true)
        }
    }


    return (
        <>

        <div className='Sub-Tab' onClick={handlerFlag} style={{background:flag?'#595959':'#333',cursor:'pointer'}}>
              Generate PO
        </div>
        
         </>
    )
}

export default GeneratePO
