import React from 'react'

const NameField = (props) => {
    return <input type="text" onChange={props.changeUserName} value={props.userName} />
}

export default NameField