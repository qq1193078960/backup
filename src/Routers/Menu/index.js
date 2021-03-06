import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import Menu from '../../Components/Menu/Menu';
import Mine from '../../Components/Mine';
import { connect } from 'react-redux';
import Audit from '../../Components/Audit';
import {Modal} from 'antd-mobile'
import { HashRouter as Router } from "react-router-dom";
import {handleTabChange} from '../../Actions/asyncActions/global'
import { getCookie } from '../../utils/cookie'
import QueueAnim from 'rc-queue-anim'
// import { Switch, Route } from 'react-router'


class Index extends Component {
  constructor (props){
    super(props)
    if (getCookie('response').length === 0) props.history.replace('/login')
    this.state = {
      // selectedTab:'menu',
      badge:5,
      dot:true,
      modalIsShow:true,
      height:document.documentElement.clientHeight - 400
    }
  }
  selectedTab = (tab) => {
  this.props.dispatch(handleTabChange(this.props.selectedTab,tab,'index'))
  }
  onModalClose = () => {
    // this.setState({
    //   modalIsShow:false
    // })
    this.props.dispatch({
      type:'save',
      payload:{
        modalIsShow:false
      }
    })

  }
  render() {
    const {selectedTab,modalIsShow} = this.props
    const { badge, dot, height} = this.state
    return(
      <div  style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'white'} }>
        <Modal
          visible={modalIsShow}
          transparent
          onClose={this.onModalClose}
          title="通知"
        >
          <div style={{ height: height, overflow: 'scroll' }}>
            通知通知通知通知<br />
          </div>
        </Modal>
        <TabBar
          tabBarPosition = 'bottom'
          tintColor="#33A3F4"
          prerenderingSiblingsNumber={0}
          >
             <TabBar.Item
             title='首页' key = 'menu'
             icon = {<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/首页.png) center center /  21px 21px no-repeat' }}
                    />}
             selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/首页_.png) center center /  21px 21px no-repeat' }}
                    />}
             onPress={()=>{this.selectedTab('menu')}}
             selected={selectedTab ==='menu'}
             >
              <Menu access={this.props.access}/>
             </TabBar.Item>
             <TabBar.Item
              badge={badge}
              title='我发起的' key = 'mine'
              icon = {<div style={{
                     width: '22px',
                     height: '22px',
                     background: 'url(/images/tab/发起.png) center center /  21px 21px no-repeat' }}
                   />}
              selected={selectedTab ==='mine'}
              onPress={()=>{
                this.selectedTab('mine');
                this.setState({
                  badge:0
                })
              }}
              selectedIcon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(/images/tab/发起_.png) center center /  21px 21px no-repeat' }}
                       />}>
              <div>
                <Mine/>

              </div>
              </TabBar.Item>
              <TabBar.Item
               dot={dot}
               title='待我审核' key = 'audit'
               icon = {<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/审核.png) center center /  21px 21px no-repeat' }}
                    />}
               selected={selectedTab ==='audit'}
               onPress={()=>{
                 this.selectedTab('audit');
                 this.setState({
                   dot:false
                 })
               }}
               selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(/images/tab/审核_.png) center center /  21px 21px no-repeat' }}
                        />}>
               <div>
                 <Audit/>
               </div>
               </TabBar.Item>
              <TabBar.Item
               title='我的' key = 'user'
               icon = {<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(/images/tab/我的.png) center center /  21px 21px no-repeat' }}
                />}
               selected={selectedTab ==='user'}
               onPress={()=>{
                 this.selectedTab('user');
               }}
               selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/我的_.png) center center /  21px 21px no-repeat' }}
                    />}>
                  <Router>
                    <QueueAnim
                      type='alpha'
                      >
                      <div key = '1'>我的</div>
                      <div key = '2'>我的</div>
                      <div key = '3'>我的</div>
                      <div key = '4'>我的</div>
                    </QueueAnim>
                  </Router>
              </TabBar.Item>
          </TabBar>
        </div>
    )
  }
}


export default connect(state => {return {selectedTab:state.global.index.tabIndex,modalIsShow:state.global.modalIsShow, access:state.loginStatus.access}})(Index)
