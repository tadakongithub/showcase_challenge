import React, { useState } from 'react'
import Modal from './Modal'

const Main = (props) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <React.Fragment>
            <h1>Welcome to {props.userName}'s education page</h1>
            <button onClick={() => setShowModal(true)}>Add new education</button>
            <Modal showModal={showModal} allUniversities={props.allUniversities}/>
        </React.Fragment>
    )
}

export default Main