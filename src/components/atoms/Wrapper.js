import styled from 'styled-components'

const Wrapper = styled.div.attrs(props => ({
    mt: props.mt || '5px',
    ms: props.ms || '0px',
    mb: props.mb || '5px'
}))`
    margin-top: ${props => props.mt};
    margin-right: ${props => props.ms};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ms};
`

export default Wrapper