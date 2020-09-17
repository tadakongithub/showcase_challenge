import React from 'react'
import Ul from '../atoms/Ul'

const SidePanel = (props) => {
    
    const uniLists = props.education.slice().reverse().map((item, index) => {
        return <li key={index}>{item.university}</li>
    })
    
    return <Ul>{uniLists}</Ul>
}

export default SidePanel