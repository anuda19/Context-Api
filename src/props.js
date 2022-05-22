import React, { Component } from 'react';
 
class Props extends Component {
    render(){
        return(
            <div>
                <h1>Welcome, {this.props.name}</h1>
                <p>Hey are there, let's have a look</p>
            </div>
        )
    }
}

export default Props