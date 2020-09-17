import styled from 'styled-components'

const Form = styled.form.attrs(props => ({
    width: props.width || 'auto',
    height: props.height || 'auto',
}))`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 15px;
    overflow: auto;
    background-color: #fff;
`

export default Form