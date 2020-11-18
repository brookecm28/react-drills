import React, {Component} from 'react'

class Array extends Component {
    constructor() {
    super()
    this.state = {
    arr: ['halo', 'bubble', 'sword', 'rocket grab', 'tidecaller', 'drowsy']
    }
}
// convertArr (givenArray) {
//     givenArray.map((element, index) => {
//         console.log(givenArray[index])
//         return <h2 key={element}></h2>
//     })
// }

render() {
    let displayWords = this.state.arr.map((element, index) => {
    return (
        <h2 key={index}>{element}</h2>
    )})
    return (
        <div>
            {displayWords}
        </div>
    )
}
}
export default Array