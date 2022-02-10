import React, { Component } from 'react'
import Header from './Header'

export default class Example2 extends Component {

    render() {
        let y="Hello World ";
        return (
            <div>
                <Header text={y}/>
            </div>
        )
    }
}
