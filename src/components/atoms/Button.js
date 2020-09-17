import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border: none;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`

export default Button