import React, {Component} from 'react'

class OnlyOne extends Component {
    constructor() {
        super()
        this.state = {
        userInput: ''
        }
    }

    handleInputChange (input) {
        this.setState({
            userInput: input
        })
    }

    render () {
        return (
            <div>
                <input onChange={(e) => this.handleInputChange(e.target.value)}/>
                <br></br>
                <span>{this.state.userInput}</span>
            </div>
        )
    }
}

export default OnlyOne