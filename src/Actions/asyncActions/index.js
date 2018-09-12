import 'whatwg-fetch'
import {formatData} from '../../utils/formatData.js'
import {data,data2} from '../../mock/mock.js'

console.log(formatData(data));

export function query(word,companyid,type){
  console.log(companyid);
  return (dispatch) => {
       //      fetch('http://192.168.8.36:8080/api/query',{
       //        method:"post",
       //        headers: {
       //   　　　　 'Accept': 'application/json',
       //   　　　　 'Content-Type': 'application/json',
       // 　　　　 },
       //        body:JSON.stringify({companyid,word})
       //      })
       //      .then(function(response) {
       //        // console.log(response);
       //        return response.json()
       //      }).then(function(data) {
       //        let assetList=[]
       //        data.forEach(d=>{
       //          assetList.push({
       //            id:d[0],
       //            category:d[1],
       //            department:d[2],
       //            sum:d[3],
       //            payDate:d[4],
       //            assetName:d[5],
       //            count:d[6],
       //            keeper:d[7],
       //            type:d[8],
       //            source:d[9],
       //            remark:d[10]
       //          })
       //        })
       //        console.log('parsed json', assetList);
       //        dispatch({type:'query',payload:assetList});
       //      }).catch(function(ex) {
       //        console.log('parsing failed', ex)
       //      })
       dispatch({type:'query',payload:formatData(data2)});
    }
}

export function HandleAllocationSelect(payload,type){
const {data,child,check,title} = payload;
// console.log(data,child,check,title);
let data_temp = [...data]
if(title){
   data_temp.map((d)=>{
    if(child && d.title === title){
      d.children.map(c => {
        if(c.id === child)
        c.check= check;
        return c;
      })

    }
    else if(d.title === title){
      d.check=check
      if( d.children){
        d.children.forEach((c)=>{
          c.check=check
        })
      }
      console.log(title,check,d.check);
    }
    if(d.children){
      d.check = true;
      d.children.forEach(c => {
        if(!c['check'])
        d.check =false;
      })
    }
    return d;
  })
}else {
  var e = eval('/'+!check+'/g')
   data_temp=JSON.parse(JSON.stringify(data).replace(e,check))
}
return (dispatch) => {
    dispatch({type:'saveAllocationData',payload:data_temp});
  }
}



export function fetchAllocationData(){
  return (dispatch) => {
      dispatch({type:'saveAllocationData',payload:formatData(data)});
    }
}
