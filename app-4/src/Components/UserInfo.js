import React, {Component} from 'react'

class UserInfo extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUser (user) {
        this.setState({
            username: user
        })
    }

    handleChangePass (pass) {
        this.setState({
            password: pass
        })
    }

    handleClick (){
        window.alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
    }

    render () {
        return (
            <div>
                <input onChange={e => this.handleChangeUser(e.target.value)}/>
                <input onChange={e => this.handleChangePass(e.target.value)}/>
                <button onClick={e => this.handleClick(e)}>Login</button>
            </div>
        )
    }
}

export default UserInfo