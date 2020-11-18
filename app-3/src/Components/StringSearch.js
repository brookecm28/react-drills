import React, {Component} from 'react'

class StringSearch extends Component {
    constructor() {
        super()
        this.state = {
        arr: ['halo', 'bubble', 'sword', 'rocket grab', 'tidecaller', 'drowsy'],
        searchTerm: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            searchTerm: e
        })
    }



    render () {
           let text = this.state.arr
           .filter((element, index) => {
               return element.includes(this.state.searchTerm)
           })     
           .map((element, index) => {
            return (
                <h2 key={index}>{element}</h2>
                
            )
        })
        return (
            <div>
                <input onChange={(e => this.handleInputChange(e.target.value))}/>
                {text}
                
            </div>
        )
    }
}

export default StringSearch