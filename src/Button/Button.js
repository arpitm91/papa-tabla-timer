import './Button.css';
import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button 
                onClick={() => this.props.changeMode(this.props.myMode)} 
                className={this.props.myMode === this.props.mode ? "btn sel" : "btn"}
            >
                {this.props.text}
            </button>
        )
    }
    
}

export default Button;