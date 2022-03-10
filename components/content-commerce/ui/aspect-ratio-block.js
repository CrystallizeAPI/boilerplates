import styled from 'styled-components'

const Outer = styled.div`
  position: relative;
  display: block;
  padding-top: ${(p) => `calc(100% / ${p.ratio})`};
`
const Inner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: stretch;
`

const orientations = {
  landscape: 16 / 9,
  portrait: 2 / 3,
  square: 1 / 1,
}
const AspectRatioBlock = ({ orientation = 'landscape', children }) => (
  <Outer ratio={orientations[orientation]}>
    <Inner>{children}</Inner>
  </Outer>
)

export default AspectRatioBlock
