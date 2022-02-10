import React, { Component } from 'react';


class Header extends Component {

    state={keywords:'',result:''}

    inputChangeHandler=(event)=> {
        console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }

     writeText=()=>{
       this.setState({
           result:this.state.keywords
        })
        
    }

    render() {
        return (
            <>
                <div className="logo">Logo</div>
                <input type="text" value={this.state.keywords} onChange={this.inputChangeHandler} />
                <button onClick={this.writeText}>Click</button>
                {this.state.result}
                </>
        )
    }
}

export default Header;



