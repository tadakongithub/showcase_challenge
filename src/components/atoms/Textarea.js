import styled from 'styled-components'

const Textarea = styled.textarea.attrs((props) => ({
    width: props.width || "100%",
    height: props.height || "auto"
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    &:focus {
        outline: none;
    }
`

export default Textarea