import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    borderColor: props.error ? 'tomato' : 'lightgray'
}))`
    width: 100%;
    border-width: 1px;
    border-color: ${props => props.borderColor};
    &:focus {
        outline: none;
    }
`

export default Input