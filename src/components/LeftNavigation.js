import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
function LeftNavigation() {
    return (
        <>
            <div className='Left-Container'>
          
                    <div className='top'>
                        <NavLink activeClassName="active" to='/agri-paurchase-management' className='tab-link'>Agri-Purchase <br/>Management</NavLink>
                        <NavLink activeClassName="active" to='/agri-input-master-maintance' className='tab-link'>Agri-Input Master<br/> Maintance</NavLink>
                        <NavLink activeClassName="active" to='/supplier-master-maintenance' className='tab-link'>Supplier Master<br/> Maintenance</NavLink>
                        <NavLink activeClassName="active" to='/agri-inputs-paurchase-requests' className='tab-link'>Agri-Input<br/> Purchase<br/> Requests</NavLink>
                    </div>
                    <div className='bottom'>
                        <NavLink activeClassName="active" to='/tax-master-maintenance' className='tab-link-bottom'>Tax Master <br/>Maintenance</NavLink>
                    </div>
               


            </div>
        </>
    )
}

export default LeftNavigation
