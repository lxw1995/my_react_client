import axios from '../plugins/axios';

export const clear = type => ({
  type
});

export const updateList = ({collectionName,type,params={_page:1,_limit:10}}) => dispatch=>{
  axios({url:`/api/goods/${collectionName}`,params})
    .then(
      res=>dispatch({type,payload:res.data.data})
    )
    .catch(
      err=>console.log('updateList',err)
    )
};

export const updateDetail = ({collectionName,_id}) => dispatch=>{
  axios({url:`/api/goods/${collectionName}/${_id}`})
    .then(
      res=>dispatch({type:'UPDATE_DETAIL',payload:res.data.data})
    )
    .catch(
      err=>console.log('updateDetail',err)
    )
};

