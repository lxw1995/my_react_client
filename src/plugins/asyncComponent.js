import React,{Component} from 'react';
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
// 思想:给组件初始化一个空值，当调用组件时，调用此函数，异步更新组件的状态