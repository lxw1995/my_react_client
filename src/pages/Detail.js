import React,{Component} from 'react';

import styles from '../assets/css/detail.module.css';

import zan from '../assets/img/zan.png';//图片引入，模块化使用
import xing from '../assets/img/xing.png';//图片引入，模块化使用
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav/UcNav";
//图片引入，模块化使用
import qs from 'query-string'
import BareScreen from "../components/BareScreen";
import {date} from "../utils/filters";



import {connect} from 'react-redux'
import {clear, updateDetail} from '../store/actionCreators'
import detail from "../store/reducers/detail";



 class Detail extends Component{
	state={
		data:{}
	}
	constructor(props){
		super(props);
		let apiname=qs.parse(props.location.search).apiname;
		let _id=props.match.params._id;
		// axios({url:`/api/goods/${apiname}/${_id}`}).then(
		// res=>{
		// 	this.setState({data:res.data.data})
		// 	// console.log(res.data.data)
		// })
			// res=>console.log(res.data.data))

		props.dispatch(clear('CLEAR_DETAIL'));

		props.dispatch(
			updateDetail({collectionName:apiname, _id})
		)
	}
	renderPage=({title,sub_title,img,detail:{auth,auth_icon,content,des,time}})=>(
		<div>
		  <UcNav/>
		  <div className={styles.content}>
		    <div className={styles['header']+' ' +styles['clear']}>
				<h2>
					{
						img&&<img src={`${img}`} style={{width:'100%'}} alt=""/>
					}
					{
						!img&& <img src={`${this.baseUrl}/${auth_icon}`} alt=""/>
					}

				</h2>

		    </div>
		    <div className={styles.cont}>
				{
					img&&<p style={{color:"red",fontSize:'.4rem'}}>￥9.9-9999</p>

				}

		      <h2>{title}</h2>
		      <div className={styles.time}>
				  <p>{time|date()}
				  <span><img src={zan} alt=""/></span>
				  </p>
		      </div>
		      <div className={styles['text-box']}   dangerouslySetInnerHTML={{__html:content}}>
				  {/*{content}*/}
				  {/*  dangerouslySetInnerHTML={{__html:content}}  对非HTML元素进行编译*/}
			  </div>
		    </div>
		  </div>
		  <div className={styles['foot-btn']}>
		    <ul>
		      <li className={styles.say}><a >
		        <i><img src={require('../assets/img/say.png')} style={{width:'100%',height:'100%'}} /></i><span>0</span>
		      </a></li>
		      <li
		        className={styles.zan}
		      ><a >
		        <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
		      </a></li>
		      <li className={styles.xing}><a >
		        <i><img src={xing} alt=""/></i>
		      </a></li>
		      <li className={styles.fx}><a>
		        <i><img src={fx} alt=""/></i>
		      </a></li>
		    </ul>
		  </div>
		</div>
	)
	
	renderBareScreen=()=>(<BareScreen/>)
	
	render(){
		let {data}=this.props;
		let el=null;

		if (data.title) {
			el = this.renderPage(data)
		}else{
			el = this.renderBareScreen()
		}
		return el;
	}
}

export default connect(
	state=>({data:state.detail})
)(Detail)