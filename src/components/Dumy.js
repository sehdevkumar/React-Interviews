import React from 'react'
import './css/main.css'
import LeftNavigation from './LeftNavigation'
import Tabs from './Tabs'
import SubTabs from './SubTabs/SubTabs'
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function Dumy() {

    return (
        <>  
        <Router>
            <div className='Main-Container'>
                
                    <LeftNavigation />
     
                  <div className='Right-Container'>
                        <Switch>
                                <Route exact path='/agri-inputs-paurchase-requests'>
                                      <Tabs/>
                                </Route>
                              
                        </Switch>
                        
                  </div>
                  
            </div>
        </Router>
        </>
    )
}

export default Dumy
