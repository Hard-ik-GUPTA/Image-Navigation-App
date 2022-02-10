import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            year:"1964"
        };
    }

    changeState=()=>{
        this.setState({brand:'Skoda'})
        this.setState({model:'Octavia'})
        this.setState({year:'2008'})
    }
    render(){
        return(
            <>
            <h1>{this.state.brand}</h1>
            <h1>{this.state.model}</h1>
            <h1>{this.state.year}</h1>
            <button type="button" onClick={this.changeState}>Change </button>
            </>
        )
    }
}
export default Car;