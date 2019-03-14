import React, { Component } from 'react';


class Student extends Component {

    render() {
        return (
            <h1>{this.props.firstname}</h1>
        )
    }
}

export default Student