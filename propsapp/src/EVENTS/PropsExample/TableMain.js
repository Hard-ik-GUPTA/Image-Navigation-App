import React, { Component } from 'react'
import Emptable from './Emptable';
import TableHeader from './TableHeader';
export default class Taablemain extends Component {
    render() {
        let empData = [
            {
                "name": "Ajay",
                "role": "Senior Developer"
            },
            {
                "name": "Vijay",
                "role": "Junior Developer"
            },
            {
                "name": "Sanjay",
                "role": "Trainee"
            }
        ];
        let aa="name2"
        return (
            <>
            <h1>Hello</h1>
                <TableHeader empdata={empData} />
            </>
        )
    }
}
