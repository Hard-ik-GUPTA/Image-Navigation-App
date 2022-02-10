import React, { Component } from 'react'
import Footer from './Footer';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let freeData="Hi world";
        return (
            <div>
                <h1>{this.props.text}</h1>
                <Footer footerData={this.props.text}   freeData={freeData}></Footer>
            </div>
        )
    }
}
