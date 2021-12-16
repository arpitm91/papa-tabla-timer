import './Modal.css';
import React from 'react';
import ReactModal from 'react-modal';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.textArea = React.createRef();
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal() {
      const val = this.textArea.current.value;
      this.props.changeText(val);
    }

    render() {
        return (
            <ReactModal
            isOpen={this.props.isOpen}
            appElement={document.getElementById('root')}
            >
                <div className='modalWrapper'>
                    <h1>Papa enter your taal here 😊</h1>
                    <textarea 
                        rows="6" 
                        cols="50" 
                        defaultValue={this.props.prevTextAreaVal} 
                        ref={this.textArea}
                        autocomplete={"off"}
                        autocorrect={"off"}
                        autofocus
                    />
                    <div>
                        <button className='ok' onClick={this.handleCloseModal}>Ok</button> 
                        <button className='cancel' onClick={() => this.props.changeMode(this.props.prevMode)}>Cancel</button> 
                    </div>
                </div>
            </ReactModal>
        )
    }
}

export default Modal;