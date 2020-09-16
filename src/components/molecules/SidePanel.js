import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    background-color: #ddd;
    margin: 0;
    padding: 10px;
    padding-left: 20px;
`

const SidePanel = (props) => {
    const uniLists = props.education.slice().reverse().map((item, index) => {
        return <li key={index}>{item.university}</li>
    })
    
    return <Ul>{uniLists}</Ul>
}

export default SidePanel