import React,{Component} from 'react';
import {Button,Checkbox} from 'antd-mobile';
import './Footer.css';


class Footer extends Component{

  render(){
    // console.log(this.props.data);
    return(
      <div className='allocation-footer'>
        <div className='radio-container' ><Checkbox className="my-radio" onChange={(a)=>this.props.onSelect(a.target.checked)} >全选</Checkbox></div>
        <div style={{width:'40%'}}></div>
        <Button type='primary' className='allocation-btn' onClick={() =>this.props.history.push({pathname:'/assetallocation/completedetail',state:{data:this.props.data}})}>入账</Button>
      </div>
    )
  }
}


export default Footer;
