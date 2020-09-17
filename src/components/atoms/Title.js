import styled from 'styled-components'

const Title = styled.h1.attrs(props => ({
    pt: props.pt || '0',
    pr: props.pr || '0',
    pb: props.pb || '0',
    pl: props.pl || '0',
    mt: props.mt || '0',
    mr: props.mr || '0',
    mb: props.mb || '0',
    ml: props.ml || '0',
    fs: props.fs || '1.25em'
}))`
    padding-top: ${props => props.pt};
    padding-right: ${props => props.pr};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.placeholder};
    margin-top: ${props => props.mt};
    margin-right: ${props => props.mr};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    font-size: ${props => props.fs};
`

export default Title