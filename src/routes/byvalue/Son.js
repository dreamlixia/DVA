import React from 'react'

class Son extends React.Component {
    render() {
        return <input onChange={this.props.onChange} />;
    }
}

export default Son