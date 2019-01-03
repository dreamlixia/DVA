import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Son from './Son'
  
class Father extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            son: ""
        }
    }

    onChangeValue = (e) => {
        this.setState({
            son: e.target.value
        })
    }

    render() {
        return <div>
            <Son onChange={this.onChangeValue}/>
            <p>这里显示 Son 组件的内容: {this.state.son}</p>
            <Link to='/'><Button type="primary">回到主页</Button></Link>
        </div>;
    }
}

export default Father