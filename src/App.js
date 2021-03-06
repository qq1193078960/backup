import React, { Component } from 'react'
// import {Button,WingBlank,NavBar,Icon,Tabs,WhiteSpace,TabBar,Grid} from 'antd-mobile'
// import {combineReducers,createStore} from 'redux'
import { HashRouter as Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import Index from './Routers/Menu'
import Assetquery from './Routers/Assetlist'
import Assetcreate from './Routers/Assetcreate'
import SearchAsset from './Routers/Assetcreate/Step1/SearchAsset.js'
import Assetdetail from './Routers/Assetdetail'
import Check from './Routers/Check'
import Login from './Routers/Login'
import Allocation from './Routers/Allocation'
import AuditDetail from './Components/Audit/AuditDetail'
import NewCard from './Components/NewCard'

const Menu = ({ match }) => (
  <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, background: 'white' } }>
    {console.log(match)}
    {match.params.menu }
  </div>
)

class App extends Component {
  render () {
    return (
      <Router history = {this.props.history}>
        <Switch>
          <Route path='/' exact render={() => (<Redirect from='/' to='/login'/>)}/>
          <Route path='/login' exact render={() => (<Login/>)}/>
          <Route path='/index' exact render={() => (<Index/>)}/>
          <Route path='/assetcreate' component={Assetcreate}/>
          <Route path='/searchasset' exact component={SearchAsset}/>
          <Route path='/assetallocation' component={Allocation}/>
          <Route path='/audit/detail/:id' component={AuditDetail}/>
          <Route path='/checksearch' component={Check}/>
          <Route path='/assetlist' exact component={Assetquery}/>
          <Route path='/asset/:id' component={Assetdetail}/>
          <Route path='/index/:menu' component={Menu}/>
          <Route path='/exception/:name'  render={({match}) => (<h>{match.params.name}</h>)}/>
          <Route path='/:menu' component={NewCard}/>
        </Switch>
      </Router>

    )
  }
}

export default App
