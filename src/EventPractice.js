import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username : '',
        message : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    handleClick = (e) => {
        alert(this.state.username + ':'  + this.state.message);
        this.setState({
            username:'',
            message:''
        })
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick(e);
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="사용자명"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    placeholder="아무거나 입력해보세요"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}
                >확인</button>
            </div>
        );
    }
}

export default EventPractice;