import React, { Component } from 'react'

class Cell extends Component {
    constructor(props) {
        // console.log('props', props)
        super()
        // console.log('the props are', this.props)
        this.state = {
            color: props.value
        }
    }

    changeColor() {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className='cell' onClick={this.changeColor.bind(this)} style={{backgroundColor: this.state.color}}></div>
        )
    }
}

export default Cell