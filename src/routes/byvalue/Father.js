import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Son from './Son'
import { getRequest } from '../../libs/getData'
  
class Father extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            son: "",
            name: [],
            city: ""
        }
    }

    componentDidMount () {
        getRequest('https://www.ele.me/restapi/shopping/v2/restaurant/category?latitude=39.986142&longitude=116.435619')
        .then((repos)=>{
            console.log(repos)
            this.setState({
                name: repos ? repos : []
            })
        })
        
        getRequest('https://www.ele.me/restapi/shopping/v1/cities/guess')
        .then((repos)=>{
            console.log(repos)
            this.setState({
                city: repos ? repos.name : ""
            })
        })
    }

    onChangeValue = (e) => {
        this.setState({
            son: e.target.value
        })
    }

    render() {
        let { name, city } = this.state
        return <div>
            <Son onChange={this.onChangeValue}/>
            <p>这里显示 Son 组件的内容: {this.state.son}</p>
            {
                name.map((item, index) => (
                    <p key={index}>{item.name}</p>)
                )
            }
            <p style={{color: 'red'}}>city: {city}</p>
            <Link to='/'><Button type="primary">回到主页</Button></Link>
        </div>;
    }
}

export default Father