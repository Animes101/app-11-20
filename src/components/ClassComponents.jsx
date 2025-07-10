import { Component } from "react";


class ClassCard extends Component{

    render(){

        return(
            <div>
                <h1>hello class components</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default ClassCard;