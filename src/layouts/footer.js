import React,{Component} from 'react';
import "./footer.css";

export default class Footer extends Component{
  render(){
    return (
      <div className="foot-btn">
        <ul>
          <li className="home"><a ></a></li>
          <li className="write"><a ></a></li>
          <li className="my"><a></a></li>
        </ul>
      </div>
    )
  }
}