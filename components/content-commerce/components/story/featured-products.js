import React from 'react'
import styled from 'styled-components'

import Product from 'components/microformats/product'

const Outer = styled.div`
  min-height: 100vh;
  padding: 50px 25px;
  background-size: 10px 10px;
  background: #fff;
  scroll-snap-align: start;
  ${({ theme }) => theme.responsive.smPlus} {
    scroll-snap-align: end;
    padding: 100px;
  }
`
const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.responsive.mdPlus} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${({ theme }) => theme.responsive.sm} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const H2 = styled.h2`
  font-size: 24px;
  margin: 100px 0 50px;
  color: #000;
  line-height: 1em;
  ${({ theme }) => theme.responsive.smPlus} {
    font-size: 45px;
    margin: 100px 0;
  }
`

const FeaturedProducts = ({ products }) => (
  <Outer>
    <H2>Featured products</H2>
    <Inner>
      {products?.map((prod) => (
        <Product {...prod} key={prod?.id} />
      ))}
    </Inner>
  </Outer>
)

export default FeaturedProducts
