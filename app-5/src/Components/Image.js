import React, {Component} from 'react'
import App from '../App.js'

class Image extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img src={this.props.pic} />
            </div>
        )
    }
}

export default Image