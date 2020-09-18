import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border: none;
    font-size: 1.3em;
    padding: 0.35em 1.2em;
    border-radius: 3px;
    cursor: pointer;
`

export default Button