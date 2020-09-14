import React from 'react'

const Modal = (props) => {
    const display = props.showModal ? 'flex' : 'none'
    return (
        <div style={{display: display}}>
            modal
        </div>
    )
}

export default Modal