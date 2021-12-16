import './Text.css';
import React from 'react';

class Text extends React.Component {
    render() {
        return (
            <div 
                className={this.props.count === this.props.myCount ? "text show" : "text"}
                style={{width: this.props.width}}
            >
                {this.props.text}
            </div>
        )
    }
}

export default Text;