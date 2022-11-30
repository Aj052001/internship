import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashbord from './Dashbord'
import Adddis from './Adddis'
import Addret from './Addret'
import Distributordetails from './Distributordetails'
import Distributordetailsr from './Distributordetailsr'
import Distributorlist from './Distributorlist'
import Distributorrequest from './Distributorrequest'
import Login from './Login'
import Retailerdetails from './Retailerdetails'
import Retailerdetailsr from './Retailerdetailsr'
import Retailerlist from './Retailerlist'
import Retailerrequest from './Retailerrequest'
import Sidebar from './Sidebar'



export default function Routerpage() {
  return (
    <>
    <Router>
        <Switch>
           <Route  exact path = '/'  component={Dashbord} />
           <Route path = '/adddis'  component={Adddis} />
           <Route path = '/addret'  component={Addret} />
           <Route path = '/distributordetails' component={Distributordetails} />
           <Route path = '/distributordetailsr' component={Distributordetailsr} />
           <Route path = '/distributorlist' component={Distributorlist} />
           <Route path = '/distributorrequest' component={Distributorrequest} />
           <Route path = '/login' component={Login} />
           <Route path = '/retailerdetails'  component={Retailerdetails} />
           <Route path = '/retailerdetailsr' component={Retailerdetailsr} />
           <Route path = '/retailerlist'  component={Retailerlist} />
           <Route path = '/retailerrequest'  component={Retailerrequest} />
           <Route path = '/sidebar'  component={Sidebar} />

        </Switch>
    </Router>
    </>
  )
}
