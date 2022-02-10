import React, { Component } from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader';


export default class Emptable extends Component {
    render() {
        const { empData } = this.props;
        return (
            <div>
                <table border="1">
                    <TableHeader />
                    <TableBody empData={empData} />
                </table>

            </div>
        )
    }
}
