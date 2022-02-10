import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
  }

  clickHandler = (param) => {
    this.setState({message:param})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={ ()=> this.clickHandler("Goodbye")}>Click</button>
      </div>
    )
  }
}

export default EventBind