import React, { Component } from 'react'

export default class Event extends Component {

    render() {
        function handleClick(e) {
            e.preventDefault();  //not to refresh the window
            console.log('Button clicked')
        }
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button onClick={handleClick}>
                        Clik
                    </button>
                </form>
            </div>
        )
    }
}


