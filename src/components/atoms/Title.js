import styled from 'styled-components'

const Title = styled.h1.attrs(props => ({
    padding: props.padding || '0',
    margin: props.margin || '0'
}))`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`

export default Title