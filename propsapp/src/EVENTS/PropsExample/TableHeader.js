import React, { Component } from 'react'

export default class TableHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const rows = this.props.empdata.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                </tr>
            )
        })
        return (
            <>
                <thead>
                    <td>NAME</td>
                    <td>Designation</td>

                </thead>
                {rows}
                               
            </>
        )
    }
}
