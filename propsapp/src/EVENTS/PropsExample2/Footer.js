import React, { Component } from 'react'
import Header from './Header'

export default class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <div>
                <h1>{this.props.footerData}</h1>
                <h1>{this.props.freeData}</h1>
                
            </div>
        )
    }
}
