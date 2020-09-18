import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    borderColor: props.error ? 'tomato' : 'lightgray'
}))`
    width: 100%;
    border-width: 1px;
    border-color: ${props => props.borderColor};
    font-size: 1.3em;
    &:focus {
        outline: none;
    }
`

export default Input