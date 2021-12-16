import './TextRow.css';
import React from 'react';
import Text from './Text/Text';

class TextRow extends React.Component {
    render() {
        return (
            <div className="textWrapper">
                {this.props.words.map((word, i) => 
                    <Text 
                        key={i} 
                        count={this.props.count} 
                        myCount={this.props.offset + i} 
                        text={word} 
                        width={(Math.floor(100/this.props.maxLength)).toString() + "%"}
                    />
                )}
            </div>
        )
    }
}

export default TextRow;