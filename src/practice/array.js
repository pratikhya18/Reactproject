import React from 'react';
export default class Array extends React.Component{
    constructor(props){
    super(props);
    this.state={
        arr1:['hello','from','silicon']
    }
    }
    handleChange=(e)=>
    {
        this.setState({
            arr1:e.target.value,
        })
    }
    handleChange2=()=>
    {
        this.setState({
            arr1:['hello','from','Baripada']
        })
    }
    render(){
        return(
            <div>
                <input value = {this.state.arr1} onChange={this.handleChange} />
                 <br/>
                 result= <button onClick = {this.handleChange2}>
                     click me
                      </button> {/*why after using button vale cant be given from input (doubt?) */}
            </div>
        )
    }
}