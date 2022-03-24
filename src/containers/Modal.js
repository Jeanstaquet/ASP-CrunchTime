// Much of this code was copied from https://github.com/WebDevSimplified/React-Modal-Popup
import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const Modal = (props) => {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button className="btn-modal" onClick={props.onClose}>X</button>
                {props.data}
            </div>
        </>,
        document.getElementById('portal')
    )
}
export default Modal;