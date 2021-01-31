import React from 'react';
export default class Substraction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0,
            sub: 0
        }
    }
    changeNum1 = (e) => {
        this.setState({
            num1: e.target.value
        })
    }
    changeNum2 = (e) => {
        this.setState({
            num2: e.target.value

        })
    }
    calculateSub = () => {
        this.setState({
            sub: parseInt(this.state.num1) - parseInt(this.state.num2)
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.num1} onChange={this.changeNum1} /> - <input value={this.state.num2} onChange={this.changeNum2} />
                   = <button onClick={this.calculateSub}>sub</button>
                   Result: <input value={this.state.sub} />
            </div>
        )
    }

}