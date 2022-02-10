import React, { Component } from 'react'

export default class TableBody extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const rows = this.props.empData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.role}</td>

                </tr>
            )
        })
        console.log(rows)
        return (
            <div>
                <tbody>
                    {rows}
                </tbody>
            </div>
        )
    }


}
