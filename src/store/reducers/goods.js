let initState=[];


//reducer
const goods = (state=initState,action)=>{
  
  let {type, payload} = action;

  switch (type) {
    case 'UPDATE_GOODS':
      // 校验payload 是不是数组
      return payload;
    case 'CLEAR_GOODS':
      // 校验payload 是不是数组
      return [];
    default:
      return state;
  }

};

export default goods;