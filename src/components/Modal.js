import React from 'react'

const Modal = (props) => {
    const display = props.showModal ? 'flex' : 'none'
    return (
        <div style={{display: display}}>
            hi
        </div>
    )
}

export default Modal