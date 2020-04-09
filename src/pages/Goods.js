import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";


export default class Follow extends Component{
  render(){
    return (
      <div className="pt">
        <Cell
          index={0}
          data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
          to={{pathname:'/detail',apiname:'home'}}
        >
          <button style={{float:'right'}}>++</button>
        </Cell>
        <Cell
          index={1}
          data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
          to={{pathname:'/detail',apiname:'home'}}
        />

      </div>
    )
  }
}