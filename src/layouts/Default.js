import React,{Component} from "react";
// 解构路由组件
//BrowserRouter   约定模式 为 history
//HashRouter     约定模式 为 hash
//Route        匹配、展示
// NavLink    声明式跳转 还可以约定 路由激活状态
//Link        声明式跳转   无激活状态
// ------Redirect   重定向
//from来自
//to 去向
//-----------
//Switch   排他性匹配

//**Route**属性
//path 路径
//component 在地址匹配的时候React的组件才会被渲染

import './Defaults.css';
import {NavLink,Route,Switch,Redirect   } from 'react-router-dom';
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Goods from "../pages/Goods";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Auth from "../guard/Auth";

export default class Defaults extends Component{
    render() {
        return (
            <div className={'Defaults'}>
                <h3>react-router-dom</h3>
                <NavLink activeClassName='default__nav--active' to={'/home'}>首页</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/goods'}>商品</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/user'}>用户</NavLink>
                <NavLink activeClassName='default__nav--active' to={'/login'}>登录</NavLink>
                <NavLink activeStyle={{background:"#399",color:'orangered'}} to={'/reg'}>注册</NavLink>
                <Switch>

                    <Route path={'/home'} component={Home}/>
                    {/*<Goods path={'/goods'} component={Goods}/>*/}
                    <Auth path={'/goods'} component={Goods}/>

                    {/*<Route path={'/user'} component={User}/>*/}
                    <Auth path={'/user'} component={User}/>
                    {/*render---Function---内联渲染和包装组件*/}
                    <Route path={'/login'} render={(props)=>{
                        console.log(props)
                        return <Login {...props} lala={"hahha"}/>

                    }}/>

                    <Route path={'/reg'} component={Reg}/>
                    <Redirect path={'/'} to={'/home'} />
                    <Route component={NoPage}></Route>
                </Switch>
            </div>
        );
    }
}