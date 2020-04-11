import React,{Component} from 'react';

import Cell from "../components/cell";
import UcButton from "../components/uc-button";
import UcList from "../components/uc-list";

// react-redux配置
import {connect} from 'react-redux';
import {clear, updateList} from '../store/actionCreators'


 class Follow extends Component{
	// state={
	//   column : []
	// };

	// async componentDidMount(){
	//   let res =  await React.axios({url:'/api/goods/foll',params:{_page:1,_limit:12}})
	//   this.setState({column:res.data.data})
	// }

	componentDidMount(){
		this.props.dispatch(clear('CLEAR_FOLLOW'));
		this.props.dispatch(
			updateList({collectionName:'foll',params:{_page:1,_limit:12},type:'UPDATE_FOLLOW'})
		)
	}
  render(){
	   let {follow}=this.props;
	  // console.log(this.props.match.url, this.props.match.path)
    return (
      <div className="pt">
        {
			follow.map(item=>(
            <Cell
              key={item._id}
              data={item}
              to={{pathname:'/detail',apiname:'follow'}}
            >
			<UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
			</Cell>
          ))
        }



      </div>
    )
  }
}
// connect相当于withRouter
export default connect(
	state=>({follow:state.follow})
)(Follow)