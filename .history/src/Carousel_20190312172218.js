import React, { Component } from 'react';


class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carousel: props.imgs
        }
    }

    render() {
        return (
            <img src={this.state[0]} />
        )
    }
}

export default Carousel