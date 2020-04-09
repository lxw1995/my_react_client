import React,{Component} from 'react';

import Cell from "../components/cell";
import UcButton from "../components/uc-button";
import UcList from "../components/uc-list";


export default class trip extends Component{
	state={
	  column : []
	};
	
	async componentDidMount(){
	  let res =  await React.axios({url:'/api/goods/follow',params:{_page:1,_limit:3}})
	  this.setState({column:res.data.data})
	}
  render(){
	  let {column}=this.state;
	  console.log(this.props.match.url, this.props.match.path)
    return (
      <div className="pt">
        {/*{*/}
        {/*  trip.map(item=>(*/}
        {/*    <Cell*/}
        {/*      key={item._id}*/}
        {/*      data={item}*/}
        {/*      to={{pathname:'/detail',apiname:'follow'}}*/}
        {/*    >*/}
		{/*	<UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>*/}
		{/*	</Cell>*/}
        {/*  ))*/}
        {/*}*/}
		  {
			  column.map((item,index)=>(
				  <UcList
					  key={item._id}
					  index={index}
					  data={item}
					  style={{background:''}}
					  to={{pathname:'/detail',apiname:'home'}}

				  />
			  ))
		  }


      </div>
    )
  }
}